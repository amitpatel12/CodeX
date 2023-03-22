import React from 'react'

const Output = () => {
    const srcDoc = `
                <html>
                    <body>
                    <h1 class="heading">Todo App 📝</h1>
                    <div class="wrapper">
                      <div class="task-input">
                        <i class="fa-solid fa-bars"></i>
                        <input type="text" placeholder="Add a new task">
                      </div>
                      <div class="controls">
                        <div class="filters">
                          <span class="active" id="all">All</span>
                          <span id="pending">Pending</span>
                          <span id="completed">Completed</span>
                        </div>
                        <button class="clear-btn">Clear All</button>
                      </div>
                      <ul class="task-box"></ul>
                    </div>
                    </body>
                    <style>body{background-color:red}</style>
                    <script></script>
                 </html>
    `
  return (
    <div className='output'>
        <div>
    <iframe
                srcDoc = {srcDoc}
                title='output'
                sandbox='allow-scripts'
                frameBorder="0"
                className='iframe-container-output'
                width='300px'
                height='300px'
            />
            <div>Details <span>button</span></div>
        </div>
    </div>
  )
}

export default Output
