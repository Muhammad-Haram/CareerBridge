import { useState } from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import UpdateProfile from './UpdateProfile'
import AppliedJobTable from './AppliedJobTable'

const skills = ["Html", "Css", "JavaScript", "TypeScript", "Reactjs", "Nextjs", "Vuejs", "Nodejs", "Expressjs", "MongoDB"];

const isResume = true;

const Profile = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>

                <div className='flex justify-between'>

                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="/img/company-logo.png" alt="profile" />
                        </Avatar>

                        <div>
                            <h1 className='font-medium text-xl'>Full Name</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste sunt,</p>
                        </div>
                    </div>

                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline">Edit</Button>
                </div>

                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>haramh643@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>0333333333</span>
                    </div>
                </div>

                <div className='my-5'>
                    <h1 className='mb-2'>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            skills.length !== 0 ? skills.map((item, index) => (<Badge key={index}>{item}</Badge>)) : <span>NA</span>
                        }
                    </div>
                </div>

                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a target='blank' href="https://github.com/Muhammad-Haram" className='text-blue-500 w-full hover:underline cursor-pointer'>Muhammad Haram</a> : <span>NA</span>
                    }
                </div>


            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>
            <Footer />
            <UpdateProfile open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile  