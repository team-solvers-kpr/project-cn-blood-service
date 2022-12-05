import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export const UpperSection = () => {
  return (
    <div className='' style={{background:'#4D4D4D'}}>
<div className='mx-32'>
    
        <p className='text-white font-medium text-justify pt-8 '>Do you currently work for Canadian Blood Services? Click on the button below to view and apply to positions on our internal career site.</p>

        <div className='flex mt-8' >
            <p className='text-red-600 text-3xl'><BsFillArrowRightCircleFill className='bg-white rounded-full border-2 border-red-600'></BsFillArrowRightCircleFill></p>
            <p className='text-white text-justify mb-12 ml-2 mt-1 hover:text-gray-200 cursor-pointer'><a href='https://login.microsoftonline.com/common/oauth2/authorize?client_id=0000000c-0000-0000-c000-000000000000&redirect_uri=https%3A%2F%2Faccount.activedirectory.windowsazure.com%2F&response_mode=form_post&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DAQAAAAIAAAAJLnJlZGlyZWN0ygFodHRwczovL2FjY291bnQuYWN0aXZlZGlyZWN0b3J5LndpbmRvd3NhenVyZS5jb20vYXBwbGljYXRpb25zL3JlZGlyZWN0dG9hcHBsaWNhdGlvbi5hc3B4P09wZXJhdGlvbj1MaW5rZWRTaWduSW4mYXBwbGljYXRpb25MaW5rTmFtZT1TdWNjZXNzRmFjdG9ycy1QUk9EJmFwcGxpY2F0aW9uSWQ9ZWM0YTMwZWMtZmNjZS00ZWZlLWIyMjQtYmExMWMzYzI5NzgzHk9wZW5JZENvbm5lY3QuQ29kZS5SZWRpcmVjdFVyacABOXFwdnU1eF9QZlJmWGk0b3pzb1liMEdDWnNpRVJvREtsdUxtbEdoSFFFcWRYQ0hPOEhSQ1lhdmRaRmdXd2xxN29FNjJsYUhLY0hSa3NaeEFSQ1VNYmlfdmxqbWhjeEdfYld0MkpGZUZRZGh6c0hQZ2E4Wnp6dVVuaG1VSFlVcXFRVjNhVDJqMFNDNDZ2ZE5yUC1RYnRVTXJSeHBPSDA5WE5weFpTNDIwZk9iQWRvVkJmS2MyX2tYWk9xZ0MzbGs2&nonce=1670059715.Jez0JF1Jt22w0ylASRoy0A&nux=1&sso_reload=true'>Employees apply here</a></p>
        </div>
</div>
    </div>
  )
}

export default UpperSection;
