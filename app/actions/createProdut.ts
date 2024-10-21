'use server';
import { createAdminClient } from '@/config/appwrite';
import { ID } from 'node-appwrite';
import { revalidatePath } from 'next/cache';
import axios from 'axios';
import { toast } from 'sonner';

const createProduct = async(formdata:any) => {
    const {storage} = await createAdminClient()
    const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  let imageId
  //const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/meat/files/${imageId}/view?project=${projectId}`;
  const image = formdata.get('Image')
  if (image && image.size > 0 && image.name !== 'undefined') {
    try {
      // Upload
      const response = await storage.createFile('meat', ID.unique(), image);
      imageId = response.$id; 
    } catch (error) {
      console.log('Error uploading image', error);
      return {
        error: 'Error uploading image',
      };
    }
  } else {
    console.log('No image file provided or file is invalid');
  }
  

  
  if(imageId !==''){
    try {
        const res = await axios.post('http://localhost:4000/v1/inventory',{
           "name":`${formdata.get('name')}`,
            "imageUrl": `https://cloud.appwrite.io/v1/storage/buckets/meat/files/${imageId}/view?project=${projectId}`,
            "description":`${formdata.get('description')}`,
           "price":Number(formdata.get('price')),
            "category":`${formdata.get('category')}`,
            "qty":`${formdata.get('qty')}`
        })
        console.log(res.data);
        toast.success("Iteam Added")
        
    } catch (error) {
        toast.error(`${error}`);
        
    }
  }


}

 
export default createProduct;