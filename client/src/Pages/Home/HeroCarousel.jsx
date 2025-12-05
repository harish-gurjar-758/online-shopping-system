import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Button from "@mui/material/Button";

export default function HeroCarousel() {
    const banners = [
        {
            img: "https://img.freepik.com/free-photo/cheerful-lady-standing-with-shopping-bags-smiling-looking-happy-pink-background_1258-301568.jpg",
            title: "UP TO 70% OFF",
            desc: "Fashion finds for the super stylish",
            button: "SHOP NOW"
        },
        {
            img: "https://img.freepik.com/free-photo/covid-quarantine-lifestyle-concept-amazed-redhead-man-looking-shopping-bags-after-buying-with_1258-161486.jpg",
            title: "Best deals of the season",
            desc: "Everything you love at low prices",
            button: "Explore Now"
        },
        {
            img: "https://img.freepik.com/free-photo/young-man-holding-shopping-bags-showing-mobile-phone-screen-money-application-standing-yell_1258-155535.jpg",
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
                <SwiperSlide
                    key={index}
                    className="w-[70%] flex items-center justify-center"
                >
                    <div
                        style={{
                            width: '80%',
                            height: "60vh",
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
                        <div className="w-full ml-28 !text-rose-950">
                            <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
                                {banner.title}
                            </h1>
                            <p style={{ fontSize: "18px" }}>{banner.desc}</p>
                            <Button
                                className="link"
                                style={{
                                    marginTop: "15px",
                                    // padding: "10px 25px",
                                    background: "white",
                                    // border: "none",
                                    borderRadius: "5px",
                                    fontWeight: "500",
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
