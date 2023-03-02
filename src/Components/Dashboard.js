import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import { TbCircleDot } from 'react-icons/tb';
import blackwPic from '../Material/b&white.jpg'
import { MdOutlineDashboard, MdOutlineCategory, MdOutlineManageAccounts } from 'react-icons/md';
import { RxPerson } from 'react-icons/rx';
import { FiVideo } from 'react-icons/fi';
import { BiError } from 'react-icons/bi';
import { AiOutlineInfoCircle, AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { FaQuestion } from 'react-icons/fa';
import { IoMdNotificationsOutline, IoIosArrowForward, } from 'react-icons/io';
import { IoDownloadOutline } from 'react-icons/io5';
import { RiUninstallFill } from 'react-icons/ri';
import Calender from './Calender';

const Dashboard = (props) => {

    const [data, setData] = useState([])
    const [date, setDate] = useState([])
    // const [value, setValue] = useState("50")
    const [selectedValue, setSelectedValue] = useState(50);
    const [currentPage, setCurrentPage] = useState(1)
    // const Items = [
    //     {
    //         icon: <MdOutlineDashboard />,
    //         name: "Dashboard",
    //         link: "/"
    //     },
    //     {
    //         icon: <RxPerson />,
    //         name: "WOW Users",
    //         link: "/"
    //     },
    //     {
    //         icon: <FiVideo />,
    //         name: "Video Clips",
    //         link: "/"
    //     },
    //     {
    //         icon: <BiError />,
    //         name: "Reported Content",
    //         link: "/"
    //     },
    //     {
    //         icon: <MdOutlineCategory />,
    //         name: "Category",
    //         link: "/"
    //     },
    //     {
    //         icon: <AiOutlineInfoCircle />,
    //         name: "Info Page",
    //         link: "/"
    //     },
    //     {
    //         icon: <FcFaq />,
    //         name: "FAQ",
    //         link: "/"
    //     },
    //     {
    //         icon: <IoMdNotificationsOutline />,
    //         name: "Push Notification",
    //         link: "/"
    //     },
    //     {
    //         icon: <MdOutlineManageAccounts />,
    //         icon1: <IoIosArrowForward />,
    //         name: "Internal User",
    //         link: "/"
    //     },

    // ]

    const getStats = () => {
        fetch(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate`)
            .then((response) => response.json())
            .then((res) => {
                setData(res);
                // console.log(res);
            })
    }

    const getDate = () => {
        fetch(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01`)
            .then((dateResponse) => dateResponse.json())
            .then((value) => {
                setDate(value.data.data);
                console.log(value.data.data);
            })

    }
    useEffect(() => {
        getStats();
        getDate();
    }, [])


    const handleChange = (e) => {
        setSelectedValue(e.target.value)
    }

    // let currentIndex = 0;
    // let finalIndex = selectedValue;
    let selectedItems = Object.values(date).slice(0, selectedValue);
    // console.log(date.length)
    // console.log(selectedItems.length)
    // const indexOfLastPage = currentPage * selectedValue;
    // const indexOfFirstPage = indexOfLastPage - selectedValue;
    // const currentItems = selectedItems.slice(indexOfFirstPage, indexOfLastPage);


    // const nextPage = selectedItems
    const pageNumber = [];
    const totalPosts = date.length

    const indexOfLastPage = currentPage * selectedValue;
    const indexOfFirstPage = indexOfLastPage - selectedValue;
    const currentItems = date.slice(indexOfFirstPage, indexOfLastPage);
    // console.log(currentItems)


    // let lastPage = Math.ceil(totalPosts / selectedValue)
    // const postsPerPage = selectedItems.length
    for (let i = 1; i <= Math.ceil(totalPosts / selectedValue); i++) {
        pageNumber.push(i);
        // console.log(currentPage)
        // console.log(pageNumber.push(i))
    }

    const paginate = (number) => {
        setCurrentPage(number)
        console.log(number)
    }


    // const paginate = (number) => {
    //     setCurrentPage(number)
    //     // console.log(indexOfFirstPage)
    //     console.log(number)
    //     if (number == 1) {
    //         currentIndex = 0
    //     }
    //     else {

    //         currentIndex = finalIndex
    //     }
    //     if (number == lastPage) {
    //         finalIndex = totalPosts
    //     }
    //     else {
    //         finalIndex = finalIndex * number
    //     }
    //     selecteditems = Object.values(date).slice(currentIndex, finalIndex)
    //     console.log(selecteditems)
    //     console.log(currentIndex, finalIndex)



    // }




    return (
        <div className=' bg-slate-800 w-[100vh] bg-cover sm:w-screen'>
            <div className='flex lg:overflow-hidden md:overflow-x-auto'>
                <div className=' bg-slate-700 h-[40rem] w-[18rem] sm:w-[20rem]'>
                    <div className='flex justify-between'>
                        <span className='flex ml-4 mt-4'>
                            <div className=' '>
                                <img className='h-10 w-10 rounded-full' src={blackwPic} alt="" />
                            </div>
                            <div className='text-indigo-600 font-bold text-xl pl-2 pt-1'>{props.children}</div>
                        </span>
                        <TbCircleDot className='text-2xl mt-6 text-indigo-600 mr-4' />
                    </div>
                    <ul className='mt-5 ml-10 space-y-5'>
                        <li><a className='flex text-[1.2rem] gap-x-7 hover:bg-indigo-600 text-white hover:rounded-md hover:mr-4 hover:pl-1 ' href="/"><MdOutlineDashboard className='mt-1' /> Dashboard</a></li>
                        <li ><a className='flex text-[1.2rem] gap-x-7 hover:bg-indigo-600 text-white hover:rounded-md hover:pl-1 hover:mr-4' href='/'><RxPerson className='mt-1' /> Wow User</a> </li>
                        <li ><a className='flex text-[1.2rem] gap-x-7 hover:bg-indigo-600 text-white hover:rounded-md hover:pl-1 hover:mr-4' href='/'><FiVideo className='mt-1' /> Video Clips</a> </li>
                        <li ><a className='flex text-[1.2rem] gap-x-7 hover:bg-indigo-600 text-white hover:rounded-md hover:pl-1 hover:mr-4' href='/'><BiError className='mt-1' /> Reported Content</a> </li>
                        <li ><a className='flex text-[1.2rem] gap-x-7 hover:bg-indigo-600 text-white hover:rounded-md hover:pl-1 hover:mr-4' href='/'><MdOutlineCategory className='mt-1' /> Category</a> </li>
                        <li ><a className='flex text-[1.2rem] gap-x-7 hover:bg-indigo-600 text-white hover:rounded-md hover:pl-1 hover:mr-4' href='/'><AiOutlineInfoCircle className='mt-1' /> Info Page</a> </li>
                        <li ><a className='flex text-[1.2rem] gap-x-7 hover:bg-indigo-600 text-white hover:rounded-md hover:pl-1 hover:mr-4' href='/'><FaQuestion className='mt-1' /> FAQ</a> </li>
                        <li ><a className='flex text-[1.2rem] gap-x-7 hover:bg-indigo-600 text-white hover:rounded-md hover:pl-1 hover:mr-4' href='/'><IoMdNotificationsOutline className='mt-1' /> Page Notification</a> </li>
                        <li ><a className='flex text-[1.2rem] gap-x-7 hover:bg-indigo-600 text-white hover:rounded-md hover:pl-1 hover:mr-4' href='/'><MdOutlineManageAccounts className='mt-1 text-2xl' /> Internal User <IoIosArrowForward className='mt-4 ml-5 sm:ml-20' /></a> </li>
                    </ul>



                </div >
                <div className=''>
                    <div className='bg-slate-700 h-[39.5rem] w-[100%] m-2 mr-[14rem] sm:w-full sm:mr-[15rem] md:h-[15rem] md:mr-[15rem] md:mt-2 md:w-full lg:mr-[30rem] xl:mr-[60rem] 2xl:h-[18rem]'>
                        <div className='pl-1 grid grid-cols-1 gap-10 md:pt-[2rem] md:pl-[1rem] md:grid-cols-3 lg:pl-[2rem] lg:pt-5 xl:pl-6rem 2xl:pl-[5rem] 2xl:pt-[2.5rem]'>
                            <div className=' flex'><IoDownloadOutline className='bg-white h-10 w-10 rounded-full m-4 p-1 lg:h-12 lg:w-12 ' />
                                <span className='pt-3 text-white'>
                                    <div>{Object.values(data).map((item) => {
                                        return <p key={item.totalInstall}>{item.totalInstall}</p>
                                    })}</div>
                                    <p> App Installed</p>
                                </span>
                            </div>
                            <div className='flex '><RiUninstallFill className='bg-white h-10 w-10 rounded-full m-4 p-1 lg:h-12 lg:w-12' />
                                <span className='pt-3 text-white'>
                                    <div>{Object.values(data).map((item) => {
                                        return <p key={item.totalInstall}>{item.activeinstall}</p>
                                    })}</div>
                                    <p > Active Installs</p>
                                </span></div>
                            <div className='flex '><RiUninstallFill className='bg-white h-10 w-10 rounded-full m-4 p-1 lg:h-12 lg:w-12' />
                                <span className='pt-3 text-white'>
                                    <div>{Object.values(data).map((item) => {
                                        return <p key={item.totalInstall}> {item.churn}</p>
                                    })}</div>
                                    <p> Churn Rate</p>
                                </span></div>
                            <div className='flex '><RiUninstallFill className='bg-white h-10 w-10 rounded-full m-4 p-1 lg:h-12 lg:w-12' />
                                <span className='pt-3 text-white'>
                                    <div>{Object.values(data).map((item) => {
                                        return <p key={item.totalInstall}>{item.totaluninstall}</p>
                                    })}</div>
                                    <p >App Un-installed</p>
                                </span></div>
                            <div className='flex '><RiUninstallFill className='bg-white h-10 w-10 rounded-full m-4 p-1 lg:h-12 lg:w-12' />
                                <span className='pt-3 text-white'>
                                    <div>{Object.values(data).map((item) => {
                                        return <p key={item.totalInstall}>{item.aliveappusers}</p>
                                    })}</div>
                                    <p>Alive app User</p>
                                </span></div>
                            <div className='flex '><RiUninstallFill className='bg-white h-10 w-10 rounded-full m-4 p-1 lg:h-12 lg:w-12' />
                                <span className='pt-3 text-white'>
                                    <div>{Object.values(data).map((item) => {
                                        return <p key={item.totalInstall}>{item.alivechurn}</p>
                                    })}</div> <p>Alive Churn Rate</p>
                                </span></div>
                        </div>
                    </div>
                    {/* <div className='bg-slate-600 '>
                </div> */}

                    <div className='hidden sm:hidden md:block xl:overflow-x-auto bg-slate-700 h-[50rem] w-[100%] ml-2 mr-100'>
                        <div>
                            <div className='flex justify-between  '>
                                <div className='flex pl-4 space-x-5  mt-2'>
                                    <p className='text-white'>Show</p>
                                    <div>
                                        <select defaultValue={selectedValue} onChange={handleChange}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="50">50</option>
                                        </select>
                                    </div>
                                    {/* <select className='border border-slate-300' value={value} onChange={(e) => {
                                        const selectValue = e.target.value;
                                        setValue(selectValue)
                                    }}>
                                        {
                                            Object.values(date).map(() => (
                                                <option value={value}></option>
                                            ))
                                        }
                                        <option value="1">10</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                        <option value="1000">1000</option>
                                        <option value="20000">20000</option>
                                    </select> */}
                                    <p className='text-white'>Entries</p>
                                </div>
                                {/* <Calender></Calender> */}
                            </div>
                            <div className=''>
                                <div className=''>
                                    <div className=' bg-stone-800 h-10 w-full ml-2 mr-5 mt-2 md:h-16 xl:h-10'>
                                        <ul className='flex justify-between text-white pt-2 pl-2 pr-8'>
                                            <li>Date</li>
                                            <li className='pl-[5rem] lg:pl-[9.5rem] md:pl-[11rem] xl:pl[7rem]'> Day <br className='md:block xl:hidden 2xl:hidden ' /> Installs</li>
                                            <li className='md:pl-[1rem] '>platform</li>
                                            <li className='md:pl-[1rem]'>Day <br className='md:block xl:hidden 2xl:hidden' /> uninstalls</li>
                                            <li className=''>Platform</li>
                                            <li className='md:pl-[1rem]'>Churn <br className='md:block xl:hidden 2xl:hidden' /> Rate</li>
                                            <li className='md:pl-[1rem]'>Churn <br className='md:block xl:hidden 2xl:hidden' /> plateform</li>
                                        </ul>
                                        <div className='flex pl-2 justify-between pr-2 pt-4 mr-10 '>
                                            <div className='space-y-8'>{currentItems.map((item, index) => {
                                                return <div key={index} className='text-white'>{item.created_At}
                                                    <hr />
                                                </div>

                                            })}</div>
                                            <div className=''>
                                                <div className='-ml-[8rem] space-y-8 md:pl-[5rem] lg:pl-[4rem] xl:pl-[2.6rem]'>
                                                    {currentItems.map((item, index) => {
                                                        return <div className='space-y-10 text-white md:pl-[2.5rem]' key={index}>{item.totalinstall}</div>
                                                    })}
                                                </div>

                                            </div>


                                            <div className='space-y-2 -ml-[7rem] md:pl-[5rem] xl:-ml-[7rem] lg:pl-[5rem] xl:pl-[0rem]'>{currentItems.map((item, index) => {

                                                return <p key={index} className='grid grid-flow-row grid-rows-2 text-white md:pl-[3rem]'><span className='flex'><AiFillAndroid className='mt-1' />{item.android_install}</span> <span className='flex'><AiFillApple className='mt-1' />{item.ios_install}</span></p>

                                            })}</div>





                                            <div>
                                                <div className='space-y-8'>{currentItems.map((item, index) => {
                                                    return <div key={index} className='text-white md:pl-[1rem] '>{item.totaluninstall}
                                                    </div>

                                                })}</div>
                                            </div>


                                            <div>
                                                <div className='space-y-2'>{currentItems.map((item, index) => {

                                                    return <p key={index} className='grid grid-flow-row grid-rows-2 text-white md:pl-[1rem] xl:-ml-16'><span className='flex'><AiFillAndroid className='mt-1' />{item.android_uninstall}</span> <span className='flex'><AiFillApple className='mt-1' />{item.ios_uninstall}</span></p>

                                                })}</div>
                                            </div>
                                            <div>
                                                <div className='space-y-8'>{currentItems.map((item, index) => {
                                                    return <div key={index} className='text-white xl:-ml-16'>{item.totalchurn}
                                                    </div>

                                                })}</div>
                                            </div>

                                            <div>
                                                <div className='space-y-2'>{currentItems.map((item, index) => {

                                                    return <p key={index} className='grid grid-flow-row grid-rows-2 text-white' >
                                                        <span className='flex'><AiFillAndroid className='mt-1' />{item.android_uninstall}</span><span className='flex'><AiFillApple className='mt-1' />{item.ios_churn}</span></p>

                                                })}</div>
                                            </div>
                                        </div>
                                        <div className='flex space-x-2 justify-end mr-10 mt-5 '>
                                            <div className='flex bg-black shadow-2xl rounded-full'>

                                                {pageNumber.map(number => (
                                                    <li key={number} className='flex p-2 pr-3 pl-3 text-white hover:bg-blue-500 rounded-full'>
                                                        <a onClick={() => paginate(number)} href="!#">
                                                            {number}
                                                        </a>
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>


                </div>
            </div >






            {/* //sm */}

            <div className=' md:hidden overflow-auto bg-slate-700 h-[50rem] w-[100%] ml-2 mr-100'>
                <div>
                    <div className='flex justify-between  '>
                        <div className='flex pl-4 space-x-5  mt-2'>
                            <p className='text-white'>Show</p>
                            <div>
                                <select defaultValue={selectedValue} onChange={handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                            {/* <select className='border border-slate-300' value={value} onChange={(e) => {
                                        const selectValue = e.target.value;
                                        setValue(selectValue)
                                    }}>
                                        {
                                            Object.values(date).map(() => (
                                                <option value={value}></option>
                                            ))
                                        }
                                        <option value="1">10</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                        <option value="1000">1000</option>
                                        <option value="20000">20000</option>
                                    </select> */}
                            <p className='text-white'>Entries</p>
                        </div>
                        <input className=' mt-2' type="date" />
                    </div>
                    <div className=''>
                        <div className=''>
                            <div className=' bg-stone-800 h-16 w-[55rem] ml-2 mr-5 mt-2'>
                                <ul className='flex justify-between text-white pt-2 pl-2 pr-8 space-x-12'>
                                    <li>Date</li>
                                    <li className='pl-[12rem]'> Day <br className='md:block xl:hidden 2xl:hidden ' /> Installs</li>
                                    <li>platform</li>
                                    <li>Day <br className='' /> uninstalls</li>
                                    <li>Platform</li>
                                    <li>Churn <br className='' /> Rate</li>
                                    <li>Churn <br /> plateform</li>
                                </ul>
                                <div className='flex pl-2 justify-between pr-2 pt-4 mr-10 '>
                                    <div className='space-y-8'>{currentItems.map((item, index) => {
                                        return <div key={index} className='text-white'>{item.created_At}
                                            <hr />
                                        </div>

                                    })}</div>
                                    <div className=''>
                                        <div className=' space-y-8 '>
                                            {currentItems.map((item, index) => {
                                                return <div className=' pl-4 space-y-10 text-white' key={index}>{item.totalinstall}</div>

                                            })}
                                        </div>

                                    </div>


                                    <div className='space-y-2  '>{currentItems.map((item, index) => {

                                        return <p key={index} className='grid grid-flow-row grid-rows-2 text-white'><span className='flex'><AiFillAndroid className='mt-1' />{item.android_install}</span> <span className='flex'><AiFillApple className='mt-1' />{item.ios_install}</span></p>

                                    })}</div>





                                    <div>
                                        <div className='space-y-8'>{currentItems.map((item, index) => {
                                            return <div key={index} className='text-white'>{item.totaluninstall}
                                            </div>

                                        })}</div>
                                    </div>


                                    <div>
                                        <div className='space-y-2 '>{currentItems.map((item, index) => {

                                            return <p key={index} className='grid grid-flow-row grid-rows-2 text-white'><span className='flex'><AiFillAndroid className='mt-1' />{item.android_uninstall}</span> <span className='flex'><AiFillApple className='mt-1' />{item.ios_uninstall}</span></p>

                                        })}</div>
                                    </div>
                                    <div>
                                        <div className='space-y-8'>{currentItems.map((item, index) => {
                                            return <div key={index} className='text-white'>{item.totalchurn}
                                            </div>

                                        })}</div>
                                    </div>

                                    <div>
                                        <div className='space-y-2 -ml-8'>{currentItems.map((item, index) => {

                                            return <p key={index} className='grid grid-flow-row grid-rows-2 text-white' >
                                                <span className='flex'><AiFillAndroid className='mt-1' />{item.android_uninstall}</span><span className='flex'><AiFillApple className='mt-1' />{item.ios_churn}</span></p>

                                        })}</div>
                                    </div>
                                </div>
                                <div className='flex space-x-2 justify-end mr-10 mt-5 '>
                                    <div className='flex bg-black shadow-2xl rounded-full'>

                                        {pageNumber.map(number => (
                                            <li key={number} className='flex p-2 pr-3 pl-3 text-white hover:bg-blue-500 rounded-full'>
                                                <a onClick={() => paginate(number)} href="!#">
                                                    {number}
                                                </a>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>



        </div >
    );
}

export default Dashboard;
