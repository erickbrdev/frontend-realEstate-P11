import { 
   InstagramButton, FacebookButton, LinkedinButton, YoutubeButton 
} from "./buttonsContact"

export default function SocialMedia() {
  return (
    <div className="flex flex-col gap-7 justify-center items-center networks-mobile w-full">
        <h2 className="font-bold mt-2 text-xl">Conheça nossas redes sociais!</h2>
        <div className="flex gap-7 h-full w-full justify-center">
          <InstagramButton />
          <FacebookButton />
          <LinkedinButton />
          <YoutubeButton />        
        </div>      
       
      </div>    
  )
}