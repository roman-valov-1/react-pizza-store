import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
   return (
      <ContentLoader
         className='pizza-block'
         speed={2}
         width={300}
         height={460}
         viewBox="0 0 280 460"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
         <circle cx="150" cy="140" r="125" />
         <rect x="25" y="280" rx="6" ry="6" width="250" height="24" />
         <rect x="25" y="325" rx="6" ry="6" width="250" height="84" />
         <rect x="25" y="426" rx="6" ry="6" width="90" height="30" />
         <rect x="151" y="426" rx="6" ry="6" width="125" height="30" />
      </ContentLoader>
   )
}

export default LoadingBlock;