const products = [
    
     {
          id: 1,
          title : "Lentes de sol DG",
          Image : "https://d3ugyf2ht6aenh.cloudfront.net/stores/304/917/products/agregar-un-titulo-2022-06-06t171306-5651-9a405d56579dc33cda16545469045117-640-0.png",
          description : "Dolce & Gabbana DG6125 3277/87 Anteojo de Sol"
      },
      {
          id: 2,
          title : "Lentes de sol Ray-Ban",
          Image : "https://http2.mlstatic.com/D_NQ_NP_703343-MLA48394265056_112021-W.jpg",
          description : "Ray-Ban Anteojo de Sol"
      },
      {
          id: 3,
          title : "Lente de sol Nike",
          Image : "https://static.nike.com/a/images/t_default/d539eca9-34cf-4893-a225-7caa77cd86fa/lentes-de-sol-show-x1-jMT44s.png",
          description : "Nike Anteojo de Sol"
      },
      {
          id: 4,
          title : "Lentes de sol Carolina Herrera",
          Image : "https://http2.mlstatic.com/D_NQ_NP_937822-MLA49657613208_042022-W.jpg",
          description : "Carolina Herrara Anteojo de Sol"
      },
      {
          id: 5,
          title : "Lentes de sol Balenciaga",
          Image : "https://m.media-amazon.com/images/I/41BMzy-xt9L._AC_UX385_.jpg",
          description : "Balenciaga Anteojo de Sol"
      },
      {
          id: 6,
          title : "Lentes de sol Gucci",
          Image : "https://http2.mlstatic.com/D_NQ_NP_697670-MLA48801770383_012022-W.jpg",
          description : " Gucci Anteojo de Sol"
      },
      {
          id: 7,
          title : "Lentes de Dior ",
          Image : "https://media.dior.com/img/es_sam/sku/couture/DSGTB1UXR_10A0_55",
          description : "Dolce & Gabbana DG6125 3277/87 Anteojo de Sol"
      },
      {
          id: 8,
          title : "Lentes de sol Prada",
          Image : "http://d3ugyf2ht6aenh.cloudfront.net/stores/304/917/products/0pr_17ws__1ab5s0_030a1-4b1fb71f5f834690a116421657783858-640-0.jpg",
          description : "Prada Anteojo de Sol"
      },
      {
          id: 9,
          title : "Lentes de sol Boss",
          Image : "https://m.media-amazon.com/images/I/71eot7AgKwL._AC_UX679_.jpg",
          description : "BOSS Anteojo de Sol"
      },
      {
          id: 10,
          title : "Lentes de sol Vogue",
          Image : "https://image4.cdnsbg.com/1/59/434748_1599496555019.jpg?width=600&height=300",
          description : "vOGUE Anteojo de Sol"
      }
  ];
  const getList = ()=>{
    return new Promise((resolve,reject) =>{
         setTimeout(() => {
              resolve(products);
         }, 2000);
    })
  }
  export default getList;