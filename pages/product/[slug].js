import React from 'react';
import {useRouter} from 'next/router'

const Slug = () => {
    const router = useRouter();
    const {slug} = router.query ;
  return (
    <div>Slug of product is : {slug}</div>
  )
}

export default Slug