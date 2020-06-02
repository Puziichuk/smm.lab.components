const productsData =[
    {
        id:1,
        name:"ВКонтакте Standart",
        // description:"Юзабилити (анализ саита) для приёма трафика
        // Создание бизнес страницы и первичное наполнение",
        price:150,
    },
    {
        id:2,
        name:"ВКонтакте Business",
        // description:"Дизайн обложки, аватарки, постов ( 10 шт. )",
        price:300,
    },
    {
        id:3,
        name:"ВКонтакте Pro+",
        // description:"Настраиваем ретаргетинг и кампании lool-a-like",
        price:700,
    },
    {
        id:4,
        name:"Facebook Standart",
        // description:"Настраиваем ретаргетинг и кампании lool-a-like",
        price:200,
    },
    {
        id:5,
        name:"Facebook Business",
        // description:"Настраиваем ретаргетинг и кампании lool-a-like",
        price:400,
    },
    {
        id:6,
        name:"Facebook Pro+",
        // description:"Настраиваем ретаргетинг и кампании lool-a-like",
        price:800,
    },
    {
        id:7,
        name:"Одноклассники Standart",
        // description:"Настраиваем ретаргетинг и кампании lool-a-like",
        price:150,
    },
    {
        id:8,
        name:"Одноклассники Business",
        // description:"Настраиваем ретаргетинг и кампании lool-a-like",
        price:550,
    },
    {
        id:9,
        name:"Одноклассники Pro+",
        // description:"Настраиваем ретаргетинг и кампании lool-a-like",
        price:950,
    },
    {
        id:10,
        name:"Instagram Standart",
        // description:"Настраиваем ретаргетинг и кампании lool-a-like",
        price:350,
    },
    {
        id:11,
        name:"Instagram Business",
        // description:"Настраиваем ретаргетинг и кампании lool-a-like",
        price:650,
    },
    {
        id:12,
        name:"Instagram Pro+",
        // description:"Настраиваем ретаргетинг и кампании lool-a-like",
        price:980,
    }
    
  
]
export const getProductsMap =(array)=> array.reduce((accObj,product)=>({ 
    ...accObj,
[product.id]:product,
}),{})

export default productsData
