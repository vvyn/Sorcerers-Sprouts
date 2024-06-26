import { useNavigate } from "react-router-dom";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';


function valuetext(value) {
    return `${value}°C`;
  }

export function Survey9() {
  const navigate = useNavigate();
  
  return (
    <div className="py-20 h-screen w-screen bg-[#CAC2AF]">
      <div className=" ">
        <div className="text-3xl text-center py-2 px-3">
           When encountering a technical issue, do you prefer a systematic approach based on established principles? OR
        </div>
        <div className="px-48 py-12">
          <Box sx={{ height: 300 }}>
            <Slider
               orientation="vertical"
               defaultValue={3} // Set default value to 3
               min={1} // Minimum value of the slider
               max={10} // Maximum value of the slider
               step={1} // Step size
               marks 
               aria-label="Temperature"
               valueLabelDisplay="auto"
            />
          </Box>
        </div>
        <div className="text-3xl text-center py-2 px-3">
          Or do you consider the human factors and social implications in your problem-solving process?
        </div>

       
        <div className="py-5 px-24">
            <button onClick={() => navigate('/Survey10')} className="bg-[#2A4223] hover:bg-[#305127] text-white font-bold w-full py-2 px-4 rounded ">Next</button>
        </div>
      </div>
    </div>
  );
}