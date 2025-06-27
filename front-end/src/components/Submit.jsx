import './Submit.css'

function Submit() {
  return (
    <div className="submit-body">
      <h2>How to Submit Your Project to WebCraft</h2>
      <ul id="main">
        <li><b>1. Fork the Repository:</b> <br/> Visit the GitHub repository and click on Fork. This
will create a copy under your GitHub account. 
</li> <br/>
        <li><b>2. Clone Your Fork:</b> <br/>
          <code>git clone https://github.com/your-username/webcraft-final-website.git
          cd webcraft</code></li> <br/>
          <li><b>3. Create a Folder for Your Project:</b> <br/> Inside the <code>src/mentees/</code> directory, create a new folder using your name or username (e.g., <code>Bob/</code>).
</li> <br/>
<li><b>4. Add Your Project:</b> <br/> Your folder should contain:
<ul>
  <li>A React app (can be minimal or complex).</li>
  <li>A file named index.jsx that: <br/>
      – Imports your main component. <br/>
      – Exports metadata (title, author, description, thumbnail).
</li>
<li>Example structure: <br/>
<code>src/mentees/Bob/public/src/App.jsxindex.jsx (other optional files)</code></li>
</ul>
</li> <br/>
<li><b>5. Metadata Format:</b><br/>In index.jsx, include: <br/>
<code>
import BobApp from './App' <br/>
          export const meta = {"{"} <br/>
            title: 'Analog Clock', <br/>
            author: 'Bob', <br/>
            description: 'A React analog clock using CSS and hooks.', <br/>
            thumbnail: '/assets/thumbnails/clock.png' <br/>
          {"}"} <br/>
          export default BobApp
  </code></li><br/>
<li><b>6. Add and Commit Your Changes:</b><br/><code>git add . <br/>
git commit -m "Added Bob's analog clock project"</code></li><br/>
<li><b>7. Push Your Branch and Create a Pull Request:</b><br/>
<code>git push origin main</code><br/>
Then go to GitHub and open a Pull Request from your forked repo's main branch to the original main branch.
</li><br/>
      </ul>
    </div>
  )
}

export default Submit
