// Good Luck 💪🏾
function pluralize(words) {
    let wordCount = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    let result = new Set(
      words.map(word => (wordCount[word] > 1 ? word + "s" : word))
    );
    return Array.from(result);
  }
  
  console.log(pluralize(["cat","dog","cat","mouse"]));  
  console.log(pluralize(["car", "car", "car"]));     
  