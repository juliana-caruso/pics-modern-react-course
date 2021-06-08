import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID k3WMjCPPr76yOrAqneazKLE2P3d0ETWLeadSIT_z7m0",
      },
});