import AWS from "aws-sdk";

const ACCESS_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
const ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY;
const region = "ap-northeast-2";
const bucketName = "choigirang-portfolio";

/** 2024/04/10 - aws-sdk를 이용한 버킷 객체 */
export default async function useGetimg(folder: string) {
  AWS.config.update({
    accessKeyId: ACCESS_ID,
    secretAccessKey: ACCESS_KEY,
    region,
  });

  const s3 = new AWS.S3();

  try {
    const data = await s3
      .listObjectsV2({ Bucket: bucketName, Prefix: folder })
      .promise();

    if (data.Contents) {
      const urls = data.Contents.map((obj) => {
        return `https://${bucketName}.s3.amazonaws.com/${obj.Key}`;
      });

      return urls.slice(1);
    }
  } catch (error) {
    throw new Error(`Error listing objects: ${error}`);
  }
}
