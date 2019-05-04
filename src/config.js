const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-q2kmfv174s55"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rbnrfwvi93.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_lhnqvVHeP",
    APP_CLIENT_ID: "5css8rgbg62qb4necodo14d320",
    IDENTITY_POOL_ID: "us-east-1:a9705401-3de6-455c-9675-0a7d404e2614"
  },
  STRIPE_KEY: "sk_test_U97MMFsrSloR7D9ZiRKaI52s00cdBsWXxR",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1govzyp2t3sqp"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://0q9ytqwd4l.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9ubVTdUm5",
    APP_CLIENT_ID: "1rd4hpjs4e8a0ivvkvrdoihm4n",
    IDENTITY_POOL_ID: "us-east-1:84862e12-99d4-448c-8801-296817778593"
  },
  STRIPE_KEY: "sk_test_U97MMFsrSloR7D9ZiRKaI52s00cdBsWXxR",

};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
