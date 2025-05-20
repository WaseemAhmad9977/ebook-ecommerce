import { useState } from 'react';
import OtpInput from 'react-otp-input';

const Otp = () => {
    const [value, setValue] = useState('')

    const verifyOtp = ()=>{
        console.log(value)
    }

    return (
        <div className="bg-gray-200 min-h-screen flex lg:flex-row flex-col">
            <div className="lg:w-6/12 bg-white flex items-center justify-center">
                <img src="/svg/mobile.svg" className="w-9/12 lg:h-auto h-[150px]" />
            </div>
            <div className="lg:w-6/12 flex items-center justify-center flex-col lg:p-0 p-12">
                <div className='space-y-6'>
                    <h1 className="text-4xl font-bold">OTP Verification</h1>
                    <div>
                        <OtpInput
                            value={value}
                            onChange={setValue}
                            numInputs={4}
                            renderSeparator={<div className='mx-3'>-</div>}
                            renderInput={(props) => <input {...props} />}
                            inputStyle={{
                                width: 80,
                                height: 60,
                                fontSize: 32,
                                borderRadius: 4
                            }}
                        />
                    </div>
                    <button onClick={verifyOtp} className='bg-indigo-600 text-white px-8 py-3 rounded font-medium'>Verify</button>
                </div>
            </div>
        </div>
    )
}

export default Otp