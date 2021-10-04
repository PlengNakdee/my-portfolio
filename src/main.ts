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
// import { stageEnv } from "./envs";
// import { PermissionsStack } from "./permissions-stack";

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404.html",
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

    // new PermissionsStack(app, 'bootstrap-stage', {
    //   env: stageEnv,
    //   trustedAccount: stageEnv.account!,
    //   terminationProtection: true,
    // });

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

new MyStack(app, "portfolio-dev", { env: devEnv });
// new MyStack(app, 'portfolio-prod', { env: prodEnv });

app.synth();
