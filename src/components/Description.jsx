import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
      <motion.div id='div1'

        initial={{
          opacity: 0
        }}

        animate={{
          opacity: 1
        }}
        transition={{
          delay:1,
          duration:2,
          repeat: Infinity,
          repeatType:'mirror'
        }}
        >
          Описание</motion.div>

          <motion.div id='div2'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2
          }}>
            <motion.img
            src='img/smile.png'
            className='smile'
            width={200}


            animate={{
              rotate:650
            }}

            transition={{
              duration:15,
              repeat: Infinity,
              repeatType: "reverse"
            }}

            whileTap={{
              scale:1.5,
              y: 100
            }}
            
            />

          </motion.div>
          
          <motion.p id="text"

          initial={{
            x: -1000
          }}

          animate={{
            x:1800
          }}

          transition={{
            delay:1,
            duration:8,
            repeat: Infinity
          }}
          >
            Бегущая строка
          </motion.p>

          <motion.p id="text2"

          animate={{
            rotateY:360
          }}

          transition={{
            duration:3,
            repeat: Infinity,
            repeatType:'mirror'
          }}
          >
            Тут происходит какое-то безумие )))))
          </motion.p>
            
            

    </div>
  )
}

export default Description