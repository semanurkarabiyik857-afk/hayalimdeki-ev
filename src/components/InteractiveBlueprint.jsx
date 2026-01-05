import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BlueprintContainer, BlueprintTitle, SVGWrapper, Tooltip } from './InteractiveBlueprint.styles';

const InteractiveBlueprint = () => {
    const navigate = useNavigate();
    const [hoveredRoom, setHoveredRoom] = useState(null);

    const rooms = [
        { id: 1, name: "Salon", path: "M50,50 L350,50 L350,250 L50,250 Z", cx: 200, cy: 150, desc: "Geniş ve ferah yaşam alanı" },
        { id: 2, name: "Mutfak", path: "M350,50 L600,50 L600,200 L350,200 Z", cx: 475, cy: 125, desc: "Modern şef mutfağı" },
        { id: 3, name: "Yatak Odası", path: "M50,250 L300,250 L300,450 L50,450 Z", cx: 175, cy: 350, desc: "Huzurlu uyku deneyimi" },
        { id: 4, name: "Banyo", path: "M300,250 L450,250 L450,400 L300,400 Z", cx: 375, cy: 325, desc: "Spa konforunda banyo" },
        { id: 5, name: "Balkon", path: "M450,250 L600,250 L600,450 L450,450 Z", cx: 525, cy: 350, desc: "Doğa ile iç içe" },
        { id: 6, name: "Çalışma Odası", path: "M600,50 L800,50 L800,250 L600,250 Z", cx: 700, cy: 150, desc: "Sessiz ve üretken" },
        { id: 7, name: "Eğlence Odası", path: "M600,250 L800,250 L800,450 L600,450 Z", cx: 700, cy: 350, desc: "Film ve oyun keyfi" }
    ];

    return (
        <BlueprintContainer>
            <BlueprintTitle>
                Mimari Yerleşim
                <span>Evinizi Keşfedin</span>
            </BlueprintTitle>

            <SVGWrapper>
                <svg viewBox="0 0 850 500">
                    {rooms.map((room) => (
                        <g key={room.id}
                            onMouseEnter={() => setHoveredRoom(room)}
                            onMouseLeave={() => setHoveredRoom(null)}
                            onClick={() => navigate(`/room/${room.id}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <path
                                d={room.path}
                                className="room-path"
                            />
                            <text
                                x={room.cx}
                                y={room.cy}
                                className="room-label"
                            >
                                {room.name}
                            </text>
                        </g>
                    ))}
                </svg>

                <AnimatePresence>
                    {hoveredRoom && (
                        <Tooltip
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            transition={{ duration: 0.2 }}
                            style={{ left: hoveredRoom.cx, top: hoveredRoom.cy }}
                        >
                            <h3>{hoveredRoom.name}</h3>
                            <p>{hoveredRoom.desc}</p>
                            <small>Detaylar için tıklayın</small>
                        </Tooltip>
                    )}
                </AnimatePresence>
            </SVGWrapper>
        </BlueprintContainer>
    );
};

export default InteractiveBlueprint;
