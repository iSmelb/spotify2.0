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
      `https://ipinfo.io/json?token=${process.env.IPI_INFO_TOKEN}`,
      {
        cache: 'no-store',
      },
    );

    if (response.status !== 200) throw new Error(response.statusText);
    return response.json();
  };
}
