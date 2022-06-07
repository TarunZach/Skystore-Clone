import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../css/mainpage.css';

function Spotlight() {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_45EDB016-52D0-4951-A5C1-99209C28C89B_2022-5-31-T11-19-2.jpg?s=1440x580&t=bgmesh"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p>Albus Dumbledore assigns Newt and his allies with a mission related to the rising power of Grindelwald. Fantasy sequel.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_896A1AAD-FA19-473B-9124-B83019E3DE46_2022-5-17-T9-22-50.jpg?s=1440x580&t=bgmesh"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <p>A biochemist with rare a blood disease inadvertently infects himself with a form of vampirism. Marvel action with Jared Leto.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_592BEA0E-E0B8-4337-B657-E7633FEC0C40_2022-4-19-T9-9-4.jpg?s=1440x580&t=bgmesh"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <p>When a serial killer strikes, Batman is forced to investigate. Matt Reeves' Gotham epic with Robert Pattinson.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_421D96C4-78A9-400D-B60E-2016EBC531B4_2022-5-23-T10-45-9.jpg?s=1440x580&t=bgmesh"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <p>When dangerous foes from other worlds appear, Peter Parker must learn what it truly means to be Spider-Man. Web-slinging sequel with Tom Holland.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_56048022-F0FE-4CE0-AEF2-F63CD0C3EC5A_2022-4-26-T9-7-11.jpg?s=1440x580&t=bgmesh"
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                    <p>Join street-smart Tom Holland as he's recruited by treasure hunter Mark Wahlberg. Plus behind-the-scenes extras.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_78558E04-EA52-45C8-A148-4D402315F2CC_2022-5-16-T10-4-20.jpg?s=1440x580&t=bgmesh"
                    alt="Sixth slide"
                />
                <Carousel.Caption>
                    <p>War drama following a secret World War II operation designed to disguise the Allied invasion of Sicily. Colin Firth and Matthew Macfadyen star.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_46773696-89F9-4D21-A926-152068A84296_2022-4-11-T9-29-26.jpg?s=1440x580&t=bgmesh"
                    alt="Seventh slide"
                />
                <Carousel.Caption>
                    <p>Comedy-drama following the true story of a taxi driver's theft of a Goya masterpiece from the National Gallery. Jim Broadbent and Helen Mirren star.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_C0897B89-27BC-4203-A8F8-3C761605D237_2022-5-23-T10-36-37.jpg?s=1440x580&t=bgmesh"
                    alt="Eight slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_2EEAEC5C-5F8F-4FC3-9825-A302FD366B05_2022-5-16-T10-2-11.jpg?s=1440x580&t=bgmesh"
                    alt="Ninth slide"
                />
                <Carousel.Caption>
                    <p>A young Viking prince sets out avenge his father's murder. Action adventure starring Alexander Skarsgård and Nicole Kidman.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_BEA91614-6588-4684-A413-677D2A2C12E5_2022-5-30-T10-37-11.jpg?s=1440x580&t=bgmesh"
                    alt="Tenth slide"
                />
                <Carousel.Caption>
                    <p>Buster Moon and his all-star crew are back for another musical extravaganza - but have to persuade the world's most reclusive rock star to join them.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Spotlight