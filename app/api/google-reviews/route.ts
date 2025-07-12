import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge';

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY
// Place ID correto da Villa Beauty Clinic encontrado via coordenadas
const PLACE_ID = process.env.GOOGLE_PLACE_ID || 'ChIJCcMxPwJhJQ0RtlUlFwqRrpc'

// Função para encontrar o Place ID correto da Villa Beauty Clinic
async function findVillaBeautyPlaceId(apiKey: string) {
  try {
    // Primeiro tentar buscar por nome específico
    const searchResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Villa%20Beauty%20Clinic%20Santa%20Maria%20da%20Feira&inputtype=textquery&fields=place_id,name,rating,user_ratings_total&key=${apiKey}`
    )
    
    if (searchResponse.ok) {
      const searchData = await searchResponse.json()
      if (searchData.candidates && searchData.candidates.length > 0) {
        return searchData.candidates[0].place_id
      }
    }

    // Fallback: buscar por coordenadas se não encontrar por nome
    const geocodeResponse = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.9240689,-8.5584509&key=${apiKey}`
    )
    
    if (geocodeResponse.ok) {
      const geocodeData = await geocodeResponse.json()
      if (geocodeData.results && geocodeData.results.length > 0) {
        // Procurar por um resultado que seja um estabelecimento, não apenas endereço
        for (const result of geocodeData.results) {
          if (result.types.includes('establishment') || result.types.includes('point_of_interest')) {
            return result.place_id
          }
        }
        // Se não encontrar estabelecimento, usar o primeiro resultado
        return geocodeData.results[0].place_id
      }
    }
  } catch (error) {
    console.error('Erro ao buscar Place ID:', error)
  }
  
  return PLACE_ID // Fallback para o ID configurado
}

export async function GET(request: NextRequest) {
  try {
    console.log('=== Google Reviews API Debug ===')
    console.log('GOOGLE_API_KEY exists:', !!GOOGLE_API_KEY)
    console.log('PLACE_ID:', PLACE_ID)
    
    if (!GOOGLE_API_KEY || GOOGLE_API_KEY === 'your_google_places_api_key_here') {
      console.log('Error: Google API key não configurada ou usando placeholder')
      return NextResponse.json(
        { 
          error: 'Google API key não configurada', 
          debug: 'Verifique se GOOGLE_PLACES_API_KEY está definida no arquivo .env.local com uma chave válida da Google Places API' 
        },
        { status: 500 }
      )
    }

    // Buscar detalhes do local incluindo reviews
    const currentPlaceId = GOOGLE_API_KEY ? await findVillaBeautyPlaceId(GOOGLE_API_KEY) : PLACE_ID
    console.log('Using Place ID:', currentPlaceId)
    
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${currentPlaceId}&fields=name,rating,reviews,user_ratings_total&language=pt&key=${GOOGLE_API_KEY}`
    console.log('API URL (without key):', apiUrl.replace(GOOGLE_API_KEY || '', 'HIDDEN_KEY'))
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log('Response status:', response.status)
    console.log('Response ok:', response.ok)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log('API Response status:', data.status)
    console.log('API Response data keys:', Object.keys(data))

    if (data.status !== 'OK') {
      console.log('Google Places API error details:', data)
      
      if (data.status === 'REQUEST_DENIED') {
        // Retornar dados de fallback quando a API key for inválida
        const fallbackData = {
          reviews: [
            {
              name: 'Villa Beauty Clinic',
              text: 'Excelente atendimento e resultados incríveis! Recomendo muito.',
              rating: 5,
              relative_time: 'Demo - Configure API'
            },
            {
              name: 'Cliente Satisfeito',
              text: 'Profissionais muito competentes e ambiente muito acolhedor.',
              rating: 5,
              relative_time: 'Demo - Configure API'
            }
          ],
          place_info: {
            name: 'Villa Beauty Clinic',
            rating: 4.9,
            total_ratings: 150
          },
          success: false,
          fallback: true,
          error: 'API key inválida - usando dados de demonstração'
        }
        
        return NextResponse.json(fallbackData)
      }
      
      throw new Error(`Google Places API error: ${data.status} - ${data.error_message || 'No error message'}`)
    }

    // Processar e formatar as reviews
    const reviews = data.result.reviews?.map((review: any) => ({
      name: review.author_name,
      text: review.text,
      rating: review.rating,
      time: review.time,
      profile_photo: review.profile_photo_url,
      relative_time: review.relative_time_description,
    })) || []

    // Informações adicionais do local
    const placeInfo = {
      name: data.result.name,
      rating: data.result.rating,
      total_ratings: data.result.user_ratings_total,
    }

    return NextResponse.json({
      reviews: reviews.slice(0, 6), // Limitar a 6 reviews mais recentes
      place_info: placeInfo,
      success: true,
    })

  } catch (error) {
    console.error('=== Google Reviews API Error ===')
    console.error('Error details:', error)
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error')
    console.error('API Key configured:', !!GOOGLE_API_KEY)
    
    // Fallback mínimo apenas se a API falhar completamente
    const fallbackData = {
      reviews: [
        {
          name: 'Villa Beauty Clinic',
          text: 'Configure a Google Places API para ver avaliações reais dos clientes.',
          rating: 5,
          relative_time: 'API não configurada'
        }
      ],
      place_info: {
        name: 'Villa Beauty Clinic',
        rating: 4.9,
        total_ratings: 0
      },
      success: false,
      fallback: true,
      error: error instanceof Error ? error.message : 'Unknown error'
    }

    return NextResponse.json(fallbackData, { status: 500 })
  }
}
