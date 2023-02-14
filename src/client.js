import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '7bomq032',
  dataset: 'production',
  apiVersion: '2023-02-01',
  useCdn: true,
  token:
    'sk3crueD0Bj62umWU9ROFKAAokMFOmzRw7y4MxxnWCOl8JF8wsq3YRr2COBLt4tu1xW9E7qr1eR92Z8Wfq2OlHAObjfbpKmxw8PpBazl54E1NA2SbT2TT2mUVpuCRRbOYpI4plg3qcmsU6rKdPYn7kP5IwyoT0Bprx3p46yfslgekUoH2G6t',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
