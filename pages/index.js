import Head from "next/head";
import Scene from "../comps/Scene";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import React, { Suspense, useRef, useState, useEffect } from "react";
import InfiniteSlider from "../comps/Slider";
import items from "../comps/items";
import { useSpring, a } from "react-spring";
import { config } from "@react-spring/three";

export default function Home() {
  const [screen, setScreen] = useState(0);
  const [color, setColor] = useState("white");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.getElementById("player").play();

    player.volume = 0.01;


    /*   document.getElementById("engine").play();
      document.getElementById("engine").volume = 0.01; */

  }, []);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mouseup", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const props = useSpring({
    config: { duration: screen == 8 ? 10000 : 0 },
    from: { val: screen == 8 ? 0 : 0 },
    to: { val: screen == 8 ? 100 : 0 },
  });

  return (
    <>
      <ColorBar>
        <ColorSquare bgColor="white" onClick={() => setColor("white")} />
        <ColorSquare bgColor="#00057C" onClick={() => setColor("#00057C")} />
        <ColorSquare bgColor="#A40000" onClick={() => setColor("#A40000")} />
        <ColorSquare bgColor="#CB9E00" onClick={() => setColor("#CB9E00")} />
      </ColorBar>

      <Player
        autoPlay
        loop
        controls
        style={{ position: "absolute", right: 10, bottom: 10, width: "25%" }}
        id="player"
      >
        <source
          src={"https://reshare-app.s3.us-east-2.amazonaws.com/music.mp3"}
          type="audio/wav"
          id="playerSource"
        />
        Your browser does not support the audio tag.
      </Player>

      <Scene screen={screen} color={color} position={position} />

      <Cont>
        {screen === 0 ? (
          <>
            <Text1 onClick={() => setScreen(0)}>DASTUN 240Z</Text1>
            <Button onClick={() => setScreen(1)}>Start</Button>
          </>
        ) : screen === 1 ? (
          <Text3 top="25vh" left="10%">
            The story of the Datsun 240Z begins on the race track, and it dates
            back to 1964 when the Prince Motoring Club was established by Dr.
            Sakuri of Prince Motors in the wake of defeat by a privately entered
            Porsche in the Japanese Grand Prix of that year.
            <Button onClick={() => setScreen(2)}>continue</Button>
          </Text3>
        ) : screen === 2 ? (
          <Text3 top="25vh" right="10%">
            Dr. Sakuri had his sights firmly fixed on victory in motorsport, and
            he sank Japanese-style deep thinking and analysis into his company’s
            efforts to achieve that success. In 1966 he achieved what he had
            aimed for with his cars obtaining first, second, and fourth places
            in the Japanese Grand Prix. It would be the last time his cars would
            race under the Prince name however as Prince Motors was bought by
            Nissan and all the technology developed by Dr. Sakuri and his
            engineers passed to Nissan – this included the engine technology
            that would find its way into the Datsun 510 and the 240Z.
            <Button onClick={() => setScreen(3)}>continue</Button>
          </Text3>
        ) : screen === 3 ? (
          <Text3 top="25vh" right="10%">
            The 240Z was sold in four unofficial series. Series 1 240Zs include
            the earliest cars built in late 1969 through mid-1971, identifiable
            by two ventilation grilles below the rear hatch and "240Z" badging
            on the C-pillar. These early cars are typically the most desirable
            to collectors, although the vents, removed from Series 2 cars, would
            allow exhaust fumes to enter the cabin when parked or at low speeds.
            Production of the 240Z ended in September 1973.
            <Button onClick={() => setScreen(4)}>continue</Button>
          </Text3>
        ) : screen === 4 ? (
          <Cont>
            <Text1>Gallery</Text1>
            <Button onClick={() => setScreen(5)}>See Specs</Button>

            <InfiniteSlider items={items} width={700} visible={3}>
              {({ css }, i) => (
                <Content>
                  <Marker>{String(i).padStart(2, "0")}</Marker>
                  <Image src={css} />
                </Content>
              )}
            </InfiniteSlider>
          </Cont>
        ) : screen === 5 ? (
          <>
            <Text3 top="25vh" right="10%">
              the S30 240Z has a naturally-aspirated Inline 6 cylinder engine,
              Petrol motor, with the engine code L24. This engine produces a
              maximum power of 153 PS (151 bhp - 113 kW) at 5600 rpm and a
              maximum torque of 198.0 Nm (146 lb.ft) at 4400 rpm.
              <Button onClick={() => setScreen(6)}>continue</Button>
            </Text3>
            <Text3 top="25vh" left="10%">
              <Image src="/engine.png" />
            </Text3>
          </>
        ) : screen === 6 ? (
          <>
            <Text3 top="25vh" left="10%">
              The power is transmitted to the road by the rear wheel drive (RWD)
              with a 5 speed Manual gearbox. The 240Z has McPherson struts, coil
              springs, lower wishbone and an anti-roll bar.
              <Button onClick={() => setScreen(7)}>continue</Button>
            </Text3>
          </>
        ) : screen === 7 ? (
          <>
            <Text3 top="60vh" right="10%">
              Stock tire sizes are 175 / 70 on 14 inch rims at the front, and
              175 / 70 on 14 inch rims at the rear. For stopping power, the S30
              240Z braking system includes Discs at the front and Drums at the
              rear.
              <Button onClick={() => setScreen(8)}>drive</Button>
            </Text3>
          </>
        ) : screen === 8 ? (
          <>
            <Button onClick={() => setScreen(0)}>finish</Button>
            {/*             <Text3 top="80vh" style={{width: '75px', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', textAlign: 'center'}}>
              <a.div style={{textAlign: 'right', display: 'flex', alignItems: 'flex-end' ,justifyContent: 'flex-end'}}>
                {screen === 8 ? props.val.to((val) => Math.floor(val)) : null}
              </a.div> 
           
              <div>km/h</div>
            
            </Text3> */}

{/*             <Player
              autoPlay
              loop
              style={{
                position: "absolute",
                right: 30,
                bottom: 200,
                width: "25%",
              }}
              id="engine"
            >
              <source
                src={
                  "https://reshare-app.s3.us-east-2.amazonaws.com/Car+Driving+Sound+Effect.mp3"
                }
                type="audio/wav"
                id="playerSource"
              />
              Your browser does not support the audio tag.
            </Player> */}
          </>
        ) : (
          <></>
        )}
      </Cont>
    </>
  );
}

const Player = styled.audio`
  opacity: 0.1;

  &:hover {
    opacity: 1;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const ColorBar = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  display: flex;
  z-index: 1000;
`;

const ColorSquare = styled.div`
  margin: 0 10px 0 0;
  width: 25px;
  height: 25px;
  background: ${(props) => props.bgColor};
  cursor: pointer;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

const Marker = styled.span`
  color: black;
  position: absolute;
  top: 0px;
  left: -30px;
  font-family: monospace;
`;

const Image = styled(a.img)`
  width: 50vh;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

const Cont = styled.div`
  display: flex;
  align-items: center;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
`;

const Text1 = styled.div`
  font-size: 100px;
  position: relative;
  font-weight: 400;
  cursor: pointer;
  font-family: "Bebas Neue", cursive;
  margin: 10px 0 0 0;
`;

const Text2 = styled.div`
  font-size: 36px;
  font-family: "Bebas Neue", cursive;
  position: relative;
  cursor: pointer;
  margin: 0 0 25px 0;
`;

const Text3 = styled.div`
  font-size: 16px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  max-width: 550px;
`;

const Speed = styled.div`
  font-family: monospace;
`;

const Button = styled.div`
  font-size: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  width: 100px;
  background-color: black;
  color: white;
  margin: 20px 0 0 0;
  padding: 10px;
  font-family: "Bebas Neue", cursive;
`;

const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: scroll 20s linear infinite;
  position: relative;
`;

const GalleryImage = styled.img`
  width: 500px;
  margin: 0 50px 0 0;
`;
