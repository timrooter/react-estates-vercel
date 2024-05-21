const prod = {
  url: {
    API_BASE_URL: 'https://mybeapp.herokuapp.com',
    OAUTH2_REDIRECT_URI: 'https://myfeapp.herokuapp.com/oauth2/redirect'
  }
}

const dev = {
  url: {
    API_BASE_URL: 'https://estates-api-5b006150c849.herokuapp.com',
    OAUTH2_REDIRECT_URI: 'http://172.20.10.3:3000/oauth2/redirect'
  }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod