import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center  text-white h-[44vh] ">
      <div className="font-bold text-5xl flex gap-2 ">Buy Me a Coffee <span><img  width={88}src="/coffee.gif" alt="" /></span></div>
      <p>A crowdfunding platform for creators. Get funded by your fans and followers.Start Now!!</p>
      <div className="mt-4 ">
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Start Now</button>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Read More</button>
      </div>
    </div>
    <div className="bg-white h-2 opacity-5">
     <h1></h1>
    </div>
    <div className="text-white container mx-auto">
      <h1 className="text-2xl font-bold text-center my-14">Your Fans can buy you a Coffee</h1>
      <div className="flex gap-5 justify-around">
         <div className="item space-y-3 flex flex-col items-center justify-center" >
          <img className="g-slate-400 rounded-full p-2 text-black" width={88} src="/man-removebg-preview.png" alt="" />
          <p className="font-bold">Fund yourself</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quia!</p>
         </div>
         <div className="item space-y-3 flex items-center flex-col justify-center" >
          <img className="g-slate-400 rounded-full p-2 text-black" width={88} src="/man-removebg-preview.png" alt="" />
          <p className="font-bold">Fund yourself</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, eligendi.</p>
         </div>
         <div className="item space-y-3 flex flex-col justify-center items-center" >
          <img className="g-slate-400 rounded-full p-2 text-black" width={88} src="/man-removebg-preview.png" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p>Your fans are available for you to help you.</p>
         </div>
      </div>
    </div>
    </>
  );
}
