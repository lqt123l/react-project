import uuid from 'uuid';

const fakeDatabase = {
    productData: [
        {
            id: uuid.v4(),
            productName: 'Swisses Gape Seed',
            productBrand: 'Swisses',
            productStore: 'Chemist',
            productType: 'Nutrition',
            regularPrice: 20,
            discountPrice: 16.99,
            productLocation: 'All Australia',
            imageUrl: 'https://www.chemistwarehouse.com.au/xxxxxx',
            productShape: 'tablets',
            productShapeNumbers: '150',//150片
            weight: 120, //重量，mg
            isInStock: true
        },
        {
            id: uuid.v4(),
            productName: 'Swisses Gape Seed',
            productBrand: 'Swisses',
            productStore: 'Priceline',
            productType: 'Nutrition',
            regularPrice: 20,
            discountPrice: 17.99,
            productLocation: 'Sydney',
            imageUrl: 'https://www.chemistwarehouse.com.au/xxxxxx',
            productShape: 'tablets',
            productShapeNumbers: '150',//150片
            weight: 120, //重量，mg
            isInStock: true
        },
        {
            id: uuid.v4(),
            productName: 'Swisses Gape Seed',
            productBrand: 'Swisses',
            productStore: 'Coles',
            productType: 'Nutrition',
            regularPrice: 20,
            discountPrice: 18.99,
            productLocation: 'Adelaide',
            imageUrl: 'https://www.chemistwarehouse.com.au/xxxxxx',
            productShape: 'tablets',
            productShapeNumbers: '150',//150片
            weight: 120, //重量，mg
            isInStock: true
        },
        {
            id: uuid.v4(),
            productName: 'Swisses Gape Seed',
            productBrand: 'Swissess',
            productStore: 'Woolworth',
            productType: 'Nutrition',
            regularPrice: 20,
            discountPrice: 19.99,
            productLocation: 'All Australia',
            imageUrl: 'https://www.chemistwarehouse.com.au/xxxxxx',
            productShape: 'tablets',
            productShapeNumbers: '150',//150片
            weight: 120, //重量，mg
            isInStock: true
        },
        {
            id: uuid.v4(),
            productName: 'Swisses Gape Seed',
            productBrand: 'Swisses',
            productStore: 'TerryWhite',
            productType: 'Nutrition',
            regularPrice: 20,
            discountPrice: 12.99,
            productLocation: 'All Australia',
            imageUrl: 'https://www.chemistwarehouse.com.au/xxxxxx',
            productShape: 'tablets',
            productShapeNumbers: '150',//150片
            weight: 120, //重量，mg
            isInStock: true
        },
        {
            id: uuid.v4(),
            productName: 'Bio Island DHA Kids 60 Capsules',
            productBrand: 'Bio Island',
            productStore: 'Chemist',
            productType: 'Nutrition',
            regularPrice: 25,
            discountPrice: 15,
            productLocation: 'All Australia',
            imageUrl: 'https://www.chemistwarehouse.com.au/xxxxxx',
            productShape: 'capsules',
            productShapeNumbers: '60',//150片
            weight: 60, //重量，mg
            isInStock: true
        },
        {
            id: uuid.v4(),
            productName: 'Bio Island DHA Kids 60 Capsules',
            productBrand: 'Bio Island',
            productStore: 'Priceline',
            productType: 'Nutrition',
            regularPrice: 25,
            discountPrice: 16,
            productLocation: 'All Australia',
            imageUrl: 'https://www.chemistwarehouse.com.au/xxxxxx',
            productShape: 'capsules',
            productShapeNumbers: '60',//150片
            weight: 60, //重量，mg
            isInStock: true
        },
        {
            id: uuid.v4(),
            productName: 'Bio Island DHA Kids 60 Capsules',
            productBrand: 'Bio Island',
            productStore: 'Coles',
            productType: 'Nutrition',
            regularPrice: 25,
            discountPrice: 18,
            productLocation: 'All Australia',
            imageUrl: 'https://www.chemistwarehouse.com.au/xxxxxx',
            productShape: 'capsules',
            productShapeNumbers: '60',//150片
            weight: 60, //重量，mg
            isInStock: true
        },
        {
            id: uuid.v4(),
            productName: 'Bio Island DHA Kids 60 Capsules',
            productBrand: 'Bio Island',
            productStore: 'Woolworth',
            productType: 'Nutrition',
            regularPrice: 25,
            discountPrice: 15,
            productLocation: 'Perth',
            imageUrl: 'https://www.chemistwarehouse.com.au/xxxxxx',
            productShape: 'capsules',
            productShapeNumbers: '60',//150片
            weight: 60, //重量，mg
            isInStock: true
        },
        {
            id: uuid.v4(),
            productName: 'Bio Island DHA Kids 60 Capsules',
            productBrand: 'Bio Island',
            productStore: 'TerryWhite',
            productType: 'Nutrition',
            regularPrice: 25,
            discountPrice: 15,
            productLocation: 'Darwin',
            imageUrl: 'https://www.chemistwarehouse.com.au/xxxxxx',
            productShape: 'capsules',
            productShapeNumbers: '60',//150片
            weight: 60, //重量，mg
            isInStock: true
        },

    ]
}

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = (filter) =>
    delay(300).then(() => {
        switch (filter) {
            case 'Swisses Gape Seed':
                return fakeDatabase.productData.filter(t => t.productName === 'Swisses Gape Seed');
            case 'Bio Island DHA Kids 60 Capsules':
                return fakeDatabase.productData.filter(t => t.productName === 'Bio Island DHA Kids 60 Capsules');
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    }
    )


