import Link from 'next/link'
import React from 'react'
import { Box } from "@mui/material";
import Image from 'next/image';

export const Footer = () => {
    const footerContent = [
        {
            title: "Términos y condiciones",
            slug: "/terminos-y-condiciones"
        },
        {
            title: "Preguntas frecuentes",
            slug: "/faq"
        }
    ]
    return (
        <div id="footer">
            <div style={{ gridColumnStart: 2, padding: 10 }}>
                {footerContent.map((data, i) => (
                    <Box margin={3}>
                        <Link key={i} href={data.slug}>
                            {data.title}dA
                        </Link>
                    </Box>
                ))
                }
            </div>
            <div style={{ gridColumnStart: 4, display:"flex", flexDirection:"column" }}>
                <Image src="./icons8-facebook.svg" alt="facebook" key={"facebook"} width={30} height={30}></Image>
                <Image src="./icons8-instagram.svg" alt="instagram" key="instagram" width={30} height={30}></Image>
                <Image src="./icons8-twitter.svg" alt="twitter" key="twitter" width={30} height={30}></Image>
            </div>
        </div>
    )
}
