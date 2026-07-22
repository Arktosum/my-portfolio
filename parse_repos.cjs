const fs = require('fs'); 
const content = fs.readFileSync('C:/Users/siddh/.gemini/antigravity/brain/653314b3-df57-4d9b-96fb-91fab83b66f2/.system_generated/steps/115/content.md', 'utf-8'); 
const jsonStr = content.split('---')[1].trim(); 
const repos = JSON.parse(jsonStr); 
repos.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at)); 
repos.forEach(r => {
  console.log(`- **${r.name}** (${r.language || 'N/A'}): ${r.description} | Stars: ${r.stargazers_count} | Size: ${r.size} | Updated: ${r.updated_at.split('T')[0]}`);
});
