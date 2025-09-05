
import Header from '../components/Header';
import WeatherSearchCard from '../WeatherSearch/WeatherSearchCard';
import ColorPicker from "../components/ColorPicker.jsx";
import React,{useState} from 'react';
function ExperiencePage() {
    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setBackgroundColor(event.target.value);
    }
    return (
        <div style={{ backgroundColor: backgroundColor }}>
            <Header />

            <div className="pt-20 min-h-screen ">
                <ColorPicker
                    color={backgroundColor}           // 传颜色值
                    onColorChange={handleColorChange} // 传改变函数
                />
                <div className="max-w-6xl mx-auto px-4 py-20">
                    <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">Experience & Skills</h1>

                    {/* Weather Card作为技能展示 */}
                    <div className="flex justify-center">
                        <WeatherSearchCard />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperiencePage;