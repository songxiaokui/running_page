interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://running.austsxk.com',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: '武安君的日常',
  navLinks: [
    {
      name: 'AI',
      url: 'https://nextai.sunls.de/',
    },
    {
      name: 'AI算卦',
      url: 'https://divination.sunls.de',
    },
    {
      name: '博客',
      url: 'https://austsxk.com',
    },
  ],
};

export default data;
