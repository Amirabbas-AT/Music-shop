import { useState } from "react";
import Product from "../components/Product";
import prodcutImage1 from "../assets/images/products/21savage.png"
import prodcutImage2 from "../assets/images/products/50cent.png"
import prodcutImage3 from "../assets/images/products/drdre.png"
import prodcutImage4 from "../assets/images/products/eminem.png"
import prodcutImage5 from "../assets/images/products/kendricklamar.png"
import prodcutImage6 from "../assets/images/products/lilbaby.png"
import prodcutImage7 from "../assets/images/products/lilwayne.png"
import prodcutImage8 from "../assets/images/products/offset.png"
import prodcutImage9 from "../assets/images/products/popsmoke.png"



const Shop = () => {
    const item = [
        {
            id: 1,
            title: "21savage has 1 grammy",
            price: 35.32,
            description: "American Dream have 14 tracks",
            images: [prodcutImage1]
        },
        {
            id: 2,
            title: "50sent has 1 grammy",
            price: 19.99,
            description: "Get Rich or Die Tryin have 18 tracks",
            images: [prodcutImage2]
        },
        {
            id: 3,
            title: "Dr-DRE has 7 grammy",
            price: 17.98,
            description: "The Chrnoic have 16 tracks",
            images: [prodcutImage3]
        },
        {
            id: 4,
            title: "Eminem has 15 grammy",
            price: 23.33,
            description: "The Eminem Show have 20 tracks",
            images: [prodcutImage4]
        },
        {
            id: 5,
            title: "Kendrick Lamar has 16 grammy",
            price: 18.05,
            description: "DAMN HAVE 14 tracks",
            images: [prodcutImage5]
        },
        {
            id: 6,
            title: "Lil Baby has won an MTV video Music",
            price: 40.00,
            description: "Its Only Me have 23 tracks",
            images: [prodcutImage6]
        },
        {
            id: 7,
            title: "Lil Wayne has 5 grammy ",
            price: 49.85,
            description: "The Carter III have 24 tracks ",
            images: [prodcutImage7]
        },
        {
            id: 8,
            title: "Offset has 3 grammy ",
            price: 14.73,
            description: "Set It Off have 13 tracks",
            images: [prodcutImage8]
        },
        {
            id: 9,
            title: "Pop Smoke has 3 grammy",
            price: 15.13,
            description: "MEET THE WOO have 9 tracks",
            images: [prodcutImage9]
        },
    ];

    return (
        <div className="container my-3">
            <div className="row">
                {item.map(item => (
                    <div className="col-lg-4" key={item.id}>
                        <Product item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
