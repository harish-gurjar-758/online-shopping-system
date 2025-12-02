import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Button from "@mui/material/Button";

export default function HeroCarousel() {
    const banners = [
        {
            img: "https://tse3.mm.bing.net/th/id/OIP.ILezmwgMVMBXx2myRa-JuQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "UP TO 70% OFF",
            desc: "Fashion finds for the super stylish",
            button: "SHOP NOW"
        },
        {
            img: "https://img.freepik.com/premium-photo/bird-flower-desktop-wallpaperfloral-digital-paperdesktop-background_1023618-6229.jpg",
            title: "Best deals of the season",
            desc: "Everything you love at low prices",
            button: "Explore Now"
        },
        {
            img: "https://wallpapercave.com/wp/wp10612554.jpg",
            title: "New arrivals",
            desc: "Latest trending fashion",
            button: "Trending Now"
        }
    ];

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3500 }}
            loop={true}
            style={{ width: "100%", borderRadius: "10px" }}
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <div
                        style={{
                            height: "420px",
                            backgroundImage: `url(${banner.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "60px",
                            color: "white",
                            fontFamily: "Poppins"
                        }}
                    >
                        <div>
                            <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
                                {banner.title}
                            </h1>
                            <p style={{ fontSize: "18px" }}>{banner.desc}</p>
                            <Button
                                style={{
                                    marginTop: "15px",
                                    padding: "10px 25px",
                                    background: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    fontWeight: "600",
                                    cursor: "pointer"
                                }}
                            >
                                {banner.button}
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
