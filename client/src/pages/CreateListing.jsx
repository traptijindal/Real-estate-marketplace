import {useState } from 'react'
import {getStorage, ref,getDownloadURL, uploadBytesResumable} from 'firebase/storage';
import {app} from '../firebase';
export default function CreateListing(){
    const [files,setFiles] = useState([]);
    const handleImageSubmit =(e) => {
      if (files.length > 0 && files.length <7) {
             const promises = [];
             for(let i=0 ; i<files.length ; i++){
              promises.push(storeImage(files[i]));

             }
      }
    };
    const storeImage = async (file) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };



  
    return (
        <main className='p-3 max-w-4xl mx-auto'>
          <h1 className='text-white text-3xl font-semibold text-center my-7'>
            Create a Listing
          </h1>
         <form className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-4 flex-1">
             <input 
             type ="text" 
              placeholder="Name" 
              className="border p-3 rounded-lg" 
              id="name"
               maxLength='62' 
               minLength='10' 
               required/>

               <textarea 
               type ="text" 
               placeholder="Description" 
               className="border p-3 rounded-lg" 
               id="description"
               required/>

               <input 
               type ="text" 
                placeholder="Address" 
                className="border p-3 rounded-lg" 
                id="address"
                required/>
                <div className='flex gap-6 flex-wrap'>
                <div className="flex gap-2 text-white">
                 <input type="checkbox" id="sale" className='w-5' />
                 <span>Sell</span>
                 </div>
                
                 <div className="flex gap-2 text-white">
                 <input type="checkbox" id="rent" className='w-5' />
                 <span>Rent</span>
                 </div>  
                 <div className="flex gap-2 text-white">
                 <input type="checkbox" id="parking" className='w-5' />
                 <span>Parking spot</span>
                 </div>
                 <div className="flex gap-2 text-white">
                 <input type="checkbox" id="furnished" className='w-5' />
                 <span>Furnished</span>
                 </div> 
                 <div className="flex gap-2 text-white">
                 <input type="checkbox" id="offer" className='w-5' />
                 <span>Offer</span>
                 </div>                                                                 
                </div>
                <div className="flex flex-wrap gap-6 ">
                  <div className="flex items-center gap-2">
                    <input type="number" id="bedrooms" min="1" max='10' required className='p-3 border border-gray-300 rounded-lg'/>
                    <p className='text-white'>Beds</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="number" id="bathrooms" min="1" max='10' required className='p-3 border border-gray-300 rounded-lg'/>
                    <p className='text-white'>Baths</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="number" id="regularPrice" min="1" max='10' required className='p-3 border border-gray-300 rounded-lg'/>
                    <div className="flex items-center gap-2">
                    <p className='text-white'>Regular price</p>
                    <span className='text-xs text-white'>($ / month)</span>
                    </div>
                   
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="number" id="discountPrice" min="1" max='10' required className='p-3 border border-gray-300 rounded-lg'/>
                    <div className="flex flex-col items-center">
                    <p className='text-white'>Discounted Price</p>
                    <span className='text-xs text-white'>($ / month)</span>
                    </div>
                    
                  </div>
                </div>
               </div>
               <div className="flex flex-col flex-1 gap-4 ">
                <p className='font-semibold text-white'>Images :
                <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max6)</span></p>
                <div className="flex gap-4">
                  <input onChange={(e) => setFiles(e.target.files)}className='p-3 border border-gray-300 rounded w-full'type="file" id='images' accept='image/*' multiple/>
                  <button type= "buttton" onClick={handleImageSubmit}className='p-3 text-green-700 border border-green-700 rounded uppercase disabled:opacity-80'>Upload</button>
                </div>
                <button className='p-3 bg-slate-700 text-white rounded-lg uppercase  '>Create Listing</button>
               </div>
              
         </form>
        </main>
      )
    }