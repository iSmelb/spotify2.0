type ipInfo = {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
};

export default class IpInfoService {
  static getUseInfo = async (): Promise<ipInfo> => {
    const response = await fetch(
      `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPI_INFO_TOKEN}`,
    );

    return response.json();
  };
}
