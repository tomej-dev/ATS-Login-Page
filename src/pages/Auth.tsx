import AuthFooter from "../features/auth/components/AuthFooter";
import AuthHeader from "../features/auth/components/AuthHeader";
import AuthMain from "../features/auth/components/AuthMain";




export default function Auth(){

    return(
        <div className="">
            <AuthHeader/>
            <AuthMain/>
            <AuthFooter/>
        </div>
        
    )

}