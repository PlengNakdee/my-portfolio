import * as s3 from "@aws-cdk/aws-s3";
import * as s3deploy from "@aws-cdk/aws-s3-deployment";
import {
  App,
  CfnOutput,
  Construct,
  RemovalPolicy,
  Stack,
  StackProps,
} from "@aws-cdk/core";

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error.html",
      publicReadAccess: true,
      cors: [
        {
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.HEAD],
          allowedOrigins: ["*"],
          allowedHeaders: ["*"],
          exposedHeaders: [
            "ETag",
            "x-amz-meta-custom-header",
            "Authorization",
            "Content-Type",
            "Accept",
          ],
        },
      ],
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // Deploy site contents to S3 bucket
    new s3deploy.BucketDeployment(this, "BucketDeployment", {
      sources: [s3deploy.Source.asset("./frontend/out")],
      destinationBucket: siteBucket,
    });

    new CfnOutput(this, "bucketWebsiteUrl", {
      value: siteBucket.bucketWebsiteUrl,
    });
  }
}

// for development, use account/region from cdk cli
// const devEnv = {
//   account: process.env.CDK_DEFAULT_ACCOUNT,
//   region: process.env.CDK_DEFAULT_REGION,
// };
const devEnv = {
  account: '483297557526',
  region: 'ap-southeast-1'
}

const app = new App();

new MyStack(app, "my-stack-dev", { env: devEnv });
// new MyStack(app, 'my-stack-prod', { env: prodEnv });

app.synth();
