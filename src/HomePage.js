import React, { Component } from 'react';
import { HiSpeakerphone } from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa';
import { RiBroadcastFill } from 'react-icons/ri';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';




class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      popunder : true,
      banner : false,
      native : false,
      skim: false,
      home: true,
      advertisers: false,
      publishers: false,
      influencers: false,
      adFormats: false,
      blog: false,
      contact: false,
    }
  }
  handlePopunder(){
    this.setState({popunder: true, banner:false, native: false, skim: false})
  }
  handleBanner(){
    this.setState({popunder: false, banner:true, native: false, skim: false})
  }
  handleNative(){
    this.setState({popunder: false, banner:false, native: true, skim: false})
  }
  handleSkim(){
    this.setState({popunder: false, banner:false, native: false, skim: true})
  }
  handleHome(){
    this.setState({home: true, advertisers:false, publishers:false, influencers:false, adFormats:false, blog:false, contact:false})
  }
  handleAdvertiser(){
    this.setState({home: false, advertisers:true, publishers:false, influencers:false, adFormats:false, blog:false, contact:false})
  }
  handlePublisher(){
    this.setState({home: false, advertisers:false, publishers:true, influencers:false, adFormats:false, blog:false, contact:false})
  }
  handleInfluencer(){
    this.setState({home: false, advertisers:false, publishers:false, influencers:true, adFormats:false, blog:false, contact:false})
  }
  handleAdFormat(){
    this.setState({home: false, advertisers:false, publishers:false, influencers:false, adFormats:true, blog:false, contact:false})
  }
  handleBlog(){
    this.setState({home: false, advertisers:false, publishers:false, influencers:false, adFormats:false, blog:true, contact:false})
  }
  handleContact(){
    this.setState({home: false, advertisers:false, publishers:false, influencers:false, adFormats:false, blog:false, contact:true})
  }
  render(){
    return (
      <div style={{ backgroundColor :'#F2F2F2'}}>
        <div className='flex justify-between p-10 pr-20 pl-20'>
          <div className=' text-3xl font-bold'>Logo</div>
          <div><span className=' text-green-400'>BN </span>/EN</div>
        </div>
        <div className='flex justify-between'>
          <div className=' flex list-none m-2 p-2'>
            <li style={{color:this.state.home? '#FF6F00': '#644F9C'}} onClick={()=> this.handleHome()} className=' text-xl font-normal m-2 p-2'>Home</li>
            <li style={{color:this.state.advertisers? '#FF6F00': '#644F9C'}} onClick={()=> this.handleAdvertiser()} className='text-xl font-normal m-2 p-2'>Advertisers</li>
            <li style={{color:this.state.publishers? '#FF6F00': '#644F9C'}} onClick={()=> this.handlePublisher()} className='text-xl font-normal m-2 p-2'>Publishers</li>
            <li style={{color:this.state.influencers? '#FF6F00': '#644F9C'}} onClick={()=> this.handleInfluencer()} className='text-xl font-normal m-2 p-2'>Influencers</li>
            <li style={{color:this.state.adFormats? '#FF6F00': '#644F9C'}} onClick={()=> this.handleAdFormat()} className='text-xl font-normal m-2 p-2'>Ad Formats</li>
            <li style={{color:this.state.blog? '#FF6F00': '#644F9C'}} onClick={()=> this.handleBlog()} className='text-xl font-normal m-2 p-2'>Blog</li>
            <li style={{color:this.state.contact? '#FF6F00': '#644F9C'}} onClick={()=> this.handleContact()} className='text-xl font-normal m-2 p-2'>Contact Us</li>
          </div>
          <div className='flex list-none m-2 p-2 mr-10 bg-white rounded-full w-64 shadow-md justify-around'>
            <li className='m-2 p-2'>Login</li>
            <li className='m-2 p-2 bg-orange-500 rounded-full w-32 text-slate-100 text-center shadow-md'>Sign Up</li>
          </div>
        </div>
        <div className='flex justify-between m-20 h-96'>
          <div className=' w-1/2'>
            <h2 className=' font-semibold text-2xl' style={{color: '#644F9C'}}>
              Here will be a Title
            </h2>
            <p>
            Nulla pellentesque lacus sed elementum aliquam. Cras dictum suscipit consectetur. Proin vitae dapibus odio. Pellentesque aliquet laoreet laoreet. Duis tempus tortor sit amet mi ornare tristique. Mauris faucibus mollis augue vitae pharetra. Fusce vehicula mi sit amet libero elementum, quis pulvinar diam feugiat.
            </p>
          </div>
          <div className=' bg-white w-1/2 mb-10 text-center'>
            
            Artwork for title 1
          </div>
        </div>
  
        <div>
          <div className='flex justify-center mb-20'>
            <div>
              <div></div>
            </div>
            <div className='ml-20 mr-20'>
              <h1 style={{color: '#644F9C'}} className =' mb-5 uppercase text-3xl font-semibold'> Available for everyone</h1>
              <p className=' text-center font-semibold text-xl' style={{ color: '#404040'}}>Here will be a text</p>
            </div>
            <div></div>
          </div>
          <div className='flex justify-center'>
            <div className='m-5'>
              <div className='ml-8 shadow-lg bg-slate-50 w-40 h-40 rounded-full pl-10 pt-10' style={{color: '#5e05e3', fontSize:'80px'}}><HiSpeakerphone/></div>
              <p style={{ color: '#404040'}} className=' m-5 text-center font-semibold text-xl'>Text 1</p>
              <button style={{backgroundColor: '#644F9C'}} className=' w-60 h-10 rounded-2xl text-white text-xl'>Hello 1</button>
            </div>
            <div className='m-5'>
              <div className=' ml-8 shadow-sm bg-slate-50 w-40 h-40 rounded-full pl-10 pt-10' style={{color: '#5e05e3', fontSize:'80px'}}><FaPaperPlane/></div>
              <p style={{ color: '#404040'}} className='m-5 text-center font-semibold text-xl'>Text 1</p>
              <button style={{backgroundColor: '#644F9C'}} className=' w-60 h-10 rounded-2xl text-white text-xl'>Hello 1</button>
            </div>
            <div className='m-5'>
              <div className='ml-8 shadow-md bg-slate-50 w-40 h-40 rounded-full pl-10 pt-10' style={{color: '#5e05e3', fontSize:'80px'}}><RiBroadcastFill/></div>
              <p style={{ color: '#404040'}} className=' m-5 text-center font-semibold text-xl'>Text 1</p>
              <button style={{backgroundColor: '#644F9C'}} className=' w-60 h-10 rounded-2xl text-white text-xl'>Hello 1</button>
            </div>          
          </div>        
        </div>
  
        <div>
          <div className='flex justify-center mt-20'>
            <div>
              <div></div>
            </div>
            <div className='ml-20 mr-20'>
              <h1 style={{color: '#644F9C'}} className =' mb-5 uppercase text-3xl font-semibold'> VERSATILE AD FORMATS</h1>
            </div>
              <div></div>
          </div>
          <div className='flex justify-center'>
            <div style={{ backgroundColor: this.state.popunder? '#FF6F00': 'white', color:this.state.popunder? 'white': 'black'}} className='m-10 pl-10 pr-10 pt-2 pb-2 w-auto rounded-3xl text-white text-xl shadow-lg' onClick={()=> this.handlePopunder()}>POP-UNDER</div>
            <div style={{ backgroundColor: this.state.banner? '#FF6F00': 'white', color:this.state.banner? 'white': 'black'}} className='m-10 pl-10 pr-10 pt-2 pb-2 w-auto rounded-3xl text-xl shadow-lg bg-slate-100 text-slate-700' onClick={()=> this.handleBanner()}>BANNER AD</div>
            <div style={{ backgroundColor: this.state.native? '#FF6F00': 'white', color:this.state.native? 'white': 'black'}}className='m-10 pl-10 pr-10 pt-2 pb-2 w-auto rounded-3xl text-xl shadow-lg bg-slate-100 text-slate-700' onClick={() => this.handleNative()}>NATIVE</div>
            <div style={{ backgroundColor: this.state.skim? '#FF6F00': 'white', color:this.state.skim? 'white': 'black'}} className='m-10 pl-10 pr-10 pt-2 pb-2 w-auto rounded-3xl text-xl shadow-lg bg-slate-100 text-slate-700'onClick={() => this.handleSkim()}>SKIM</div>
          </div>
          {this.state.popunder?
            <div className='flex'>
              <div style={{ backgroundColor: '#644F9C'}} className='m-20 mt-0 text-slate-100 text-center w-1/2 first-letter:text-3xl font-bold h-96'>
                Ad Format
              </div>
              <div className=' w-1/2'>
                <p style={{ color: '#FF6F00'}} className=' uppercase font-semibold text-2xl m-5 ml-10 mr-10'>POP-UNDER</p>
                <p className=' font-semibold text-2xl text-black m-5 ml-10 mr-10'>This is one of the most popular ads. After user’s click, this
                  ad opens landing page in behind. So, the user experience is
                  not hampered much.
                </p>
                {/* <div>Learn More</div> */}
              </div>
          </div>
          : null
          }
  
          {this.state.banner?
            <div className='flex'>
              <div style={{ backgroundColor: '#644F9C'}} className='m-20 mt-0 text-slate-100 text-center w-1/2 first-letter:text-3xl font-bold h-96'>
                Ad Format
            </div>
              <div className=' w-1/2'>
                <p style={{ color: '#FF6F00'}} className=' uppercase font-semibold text-2xl m-5 ml-10 mr-10'>banner ad</p>
                <p className=' font-semibold text-2xl text-black m-5 ml-10 mr-10'>Choose between the available banner formats. Highly effective ad for visibility.</p>
                {/* <div>Learn More</div> */}
              </div>
          </div>
          : null
          }
          {this.state.native?
            <div className='flex'>
              <div style={{ backgroundColor: '#644F9C'}} className='m-20 mt-0 text-slate-100 text-center w-1/2 first-letter:text-3xl font-bold h-96'>
                Ad Format
            </div>
              <div className=' w-1/2'>
                <p style={{ color: '#FF6F00'}} className=' uppercase font-semibold text-2xl m-5 ml-10 mr-10'>NATIVE</p>
                <p className=' font-semibold text-2xl text-black m-5 ml-10 mr-10'>Ad format with the image and the title, that perfectly fits into the content of the site. Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.</p>
                {/* <div>Learn More</div> */}
              </div>
          </div>
          : null
          }
          {this.state.skim?
            <div className='flex'>
              <div style={{ backgroundColor: '#644F9C'}} className='m-20 mt-0 text-slate-100 text-center w-1/2 first-letter:text-3xl font-bold h-96'>
                Ad Format
            </div>
              <div className=' w-1/2'>
                <p style={{ color: '#FF6F00'}} className=' uppercase font-semibold text-2xl m-5 ml-10 mr-10'>SKIM</p>
                <p className=' font-semibold text-2xl text-black m-5 ml-10 mr-10'>SKIM" is a link that a publisher inserts on a specific site
                    element, and after clicking on it, an advertisement appears
                    to the user.
                    SKIM gives 100% control of your sold traffic amount, higher
                    CR to advertisers and CPM rates to publishers.
                </p>
                {/* <div>Learn More</div> */}
              </div>
          </div>
          : null
          }
        </div>

        <div style={{backgroundColor: '#644F9C'}} className="pb-20">
          <div>
            <p className=' text-center text-white font-bold text-3xl p-10'>Title 1</p>
            <div className='flex justify-center space-x-10 h-auto'>
              <div className='border-2 rounded-full w-80 h-80  border-dashed'>
                <p className='text-slate-100 text-7xl pt-20 text-center'>1 BN+</p>
                <p className='mt-5 text-center text-slate-100 font-semibold text-3xl'>Daily Impressions</p>
              </div>
              <div className=' bg-stone-50 border-2 rounded-full w-80 h-80  border-dashed'>
                <p style={{ color: '#644F9C'}} className='text-slate-100 text-7xl pt-20 text-center'>$500K+</p>
                <p style={{ color: '#644F9C'}} className='mt-5 text-center text-slate-100 font-semibold text-3xl'>Paid</p>
              </div>
              <div style={{ backgroundColor:'#FF6F00', color:'white'}} className='rounded-full w-80 h-80'>
                <p className='text-slate-100 text-7xl pt-20 text-center'>8K+</p>
                <p className='mt-5 text-center text-slate-100 font-semibold text-3xl'>Global Publishers</p>
              </div>              
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-10 ml-10 mr-10'>
          <div className=' m-10 '>
           <p style={{ color: '#644F9C'}} className='text-2xl font-normal'>We are social</p>
           <p className=' mt-5 text-xl font-normal'>FOLLOW US</p>
           <div className='flex space-x-2 mt-5'>
            <span style={{ fontSize: '30px'}}><FaInstagramSquare/></span>
            <span style={{ fontSize: '30px'}}><FiFacebook/></span>
            <span style={{ fontSize: '30px'}}><BsYoutube/></span>
           </div>
           <div className=' mt-20 text-3xl font-bold'>Logo</div>
          </div>
          <div className=' m-10 '>
            <p style={{ color: '#644F9C'}} className='text-2xl font-normal'>Links</p>
            <div className=' text-black text-xl font-bold mt-4'>ADVERTISERS</div>
            <div className=' text-black text-xl font-bold mt-4'>PUBLISHERS</div>
            <div className=' text-black text-xl font-bold mt-4'>INFLUENCERS</div>
            <div className=' text-black text-xl font-bold mt-4'>AD FORMATS</div>
          </div>
          <div className=' m-10 '>
            <p style={{ color: '#644F9C'}} className='text-2xl font-normal'>Documents</p>
            <div className=' text-black text-xl font-bold mt-4'>TERMS & CONDITIONS</div>
            <div className=' text-black text-xl font-bold mt-4'>PRIVACY POLICY </div>
            <div className=' text-black text-xl font-bold mt-4'>CANCELLATION POLICY</div>
            <div className=' text-black text-xl font-bold mt-4'>BLOG</div>
          </div>
          <div className=' m-10 '>
            <p style={{ color: '#644F9C'}} className='text-2xl font-normal'>Support</p>
            <div className=' text-black text-xl font-normal mt-4'>FAQ</div>
            <div className=' text-black text-xl font-normal mt-4'>MEDIA KIT</div>
            <div className=' text-black text-xl font-normal mt-4'>CANCELLATION POLICY</div>
            <div className=' text-black text-xl font-normal mt-4'>CONTACT US</div>
          </div>
        </div>

        
      </div>
    )
  }
}





export default HomePage