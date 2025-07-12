# Como Configurar as Avaliações do Google Maps

## 1. Obter Google Places API Key

### Passo a Passo:

1. **Acesse o Google Cloud Console:**
   - Vá para [https://console.cloud.google.com/](https://console.cloud.google.com/)

2. **Crie ou Selecione um Projeto:**
   - Crie um novo projeto ou selecione um existente
   - Nome sugerido: "Villa Beauty Website"

3. **Ative a Places API:**
   - No menu lateral, vá para "APIs & Services" > "Library"
   - Procure por "Places API"
   - Clique em "Enable"

4. **Crie uma API Key:**
   - Vá para "APIs & Services" > "Credentials"
   - Clique em "Create Credentials" > "API Key"
   - Copie a chave gerada

5. **Configure Restrições (Recomendado):**
   - Clique na API Key criada
   - Em "API restrictions", selecione "Restrict key"
   - Marque apenas "Places API"
   - Em "Application restrictions", configure conforme necessário

## 2. Encontrar o Place ID da Villa Beauty Clinic

### Opção 1: Place ID Finder (Recomendado)
1. Acesse: [https://developers.google.com/maps/documentation/places/web-service/place-id](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Use a ferramenta "Place ID Finder"
3. Procure por "Villa Beauty Clinic, R. Ferreira Castro, Santa Maria da Feira"
4. Copie o Place ID

### Opção 2: Manualmente
1. Abra o Google Maps
2. Procure por "Villa Beauty Clinic, Santa Maria da Feira"
3. Clique no local
4. Copie a URL
5. O Place ID está no parâmetro `place_id` da URL

## 3. Configurar Variáveis de Ambiente

1. **Copie o arquivo de exemplo:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Edite o arquivo `.env.local`:**
   ```env
   GOOGLE_PLACES_API_KEY=sua_api_key_aqui
   GOOGLE_PLACE_ID=seu_place_id_aqui
   ```

3. **Substitua os valores:**
   - `sua_api_key_aqui` pela API Key obtida no passo 1
   - `seu_place_id_aqui` pelo Place ID obtido no passo 2

## 4. Testar a Implementação

1. **Reinicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

2. **Acesse a página inicial:**
   - As avaliações devem carregar automaticamente
   - Se não funcionou, verifique o console do navegador para erros

3. **Teste a API diretamente:**
   ```bash
   curl http://localhost:3000/api/google-reviews
   ```

## 5. Solução de Problemas

### Erro de API Key:
- Verifique se a Places API está habilitada
- Confirme se a API Key está correta no `.env.local`
- Verifique as restrições da API Key

### Erro de Place ID:
- Confirme se o Place ID está correto
- Teste o Place ID na ferramenta do Google

### Erro de Quota:
- A Google Places API tem limites gratuitos
- Verifique o uso no Google Cloud Console

## 6. Custos

- **Gratuito:** 300$ de créditos mensais (suficiente para ~100,000 requests)
- **Place Details:** $17 por 1,000 requests (após os créditos gratuitos)
- Para um site normal, os créditos gratuitos são mais que suficientes

## 7. Fallback

Se a API falhar por qualquer motivo, o sistema automaticamente usa avaliações de fallback para manter o site funcionando.
