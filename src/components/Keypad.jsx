import React from 'react'
import playButton from '../assets/play-buttton.png'
import pauseButton from '../assets/pause.png'

function Keypad({togglePause,isPaused, started}) {
  return (
    <div className='keypad'> 
    <div class="flex mt-10">
    <div class="btn flex-center">
      <div class="btn-line"></div>
    </div>
    <div class="btn menu-btn">
      <div class="inner-btn">
        <img src={isPaused || !started? playButton : pauseButton }
        onClick={togglePause}
        alt="play/pause" className='play-pause'/>
      </div>
    </div>
    <div class="btn flex-center">
      <div class="btn-line"></div>
    </div>
  </div>
  <div class="abs-btn">
    <div class="imcomp-rec"></div>
  </div>
  <div class="abs-btn2">
    <div class="imcomp-rec"></div>
  </div>
  <div class="flex mt-10">
    <div class="btn flex-start px-10">
      <div class="digit">1</div>
      <div class="symbol">&#9903;</div>
    </div>
    <div class="btn">
      <div class="btn flex-start px-10">
        <div class="digit">2</div>
        <div class="symbol">abc</div>
      </div>
    </div>
    <div class="btn">
      <div class="btn flex-start px-10">
        <div class="digit">3</div>
        <div class="symbol">def</div>
      </div>
    </div>
  </div>
  <div class="flex mt-7">
    <div class="btn">
      <div class="btn flex-start px-10">
        <div class="digit">4</div>
        <div class="symbol">ghi</div>
      </div>
    </div>
    <div class="btn">
      <div class="btn flex-start px-10">
        <div class="digit">5</div>
        <div class="symbol">jkl</div>
      </div>
    </div>
    <div class="btn">
      <div class="btn flex-start px-10">
        <div class="digit">6</div>
        <div class="symbol">mno</div>
      </div>
    </div>
  </div>
  <div class="flex mt-7">
    <div class="btn">
      <div class="btn flex-start px-10">
        <div class="digit">7</div>
        <div class="symbol">pqrs</div>
      </div>
    </div>
    <div class="btn">
      <div class="btn flex-start px-10">
        <div class="digit">8</div>
        <div class="symbol">tuv</div>
      </div>
    </div>
    <div class="btn">
      <div class="btn flex-start px-10">
        <div class="digit">9</div>
        <div class="symbol">wxyz</div>
      </div>
    </div>
  </div>
  <div class="flex mt-7">
    <div class="btn">
      <div class="btn flex-start px-10">
        <div class="digit">*</div>
        <div class="symbol">&#9903;</div>
      </div>
    </div>
    <div class="btn">
      <div class="btn flex-start px-10">
        <div class="digit">0</div>
        <div class="symbol">&#9903;</div>
      </div>
    </div>
    <div class="btn">
      <div class="btn flex-start px-10">
        <div class="digit">#</div>
        <div class="symbol">&#8679;</div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Keypad   