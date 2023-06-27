# Improve Browser Performance
How to improve Browser Performance?

## Image Optimization
* Use Image Component provided by Next to optimize images

For example:
```
import Image from 'next/image';

<Image src="/large-image.jpg" alt="Large Image" width={3048} height={2024} />
```
## Optimize Imports 
* Use dynamic imports to optimize imports

For example:
```
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../components/layout'), {
  suspense: true,
  ssr: true,
})
```

## Optimizing Fonts
* optimizing fonts by including link tag of the font of your choice

For exmaple:
```
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

<Layout className={roboto.className}>
   <Component {...pageProps} />
</Layout>
```

## Optimize Third Party Scripts
* For Third party Script tags, add the strategy parameter contianer "afterInteractive"
 `strategy="afterInteractive"`
 
 For example:
 ```
 <Script
    src="https://connect.facebook.net/en_US/sdk.js"
    strategy="afterInteractive"
 />
 ```

 ## Resource
 [Improving your Core Web Vitals](https://nextjs.org/learn/seo/improve)


