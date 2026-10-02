// PASTE YOUR RAZORPAY PAYMENT LINK HERE
var PAY_URL = "https://rzp.io/l/YOUR-LINK";
var payBtn = document.getElementById("payBtn");
if (payBtn) payBtn.href = PAY_URL;

// Table of contents data
var P=[
["Part 1: The Foundation",[["Why You Feel Stuck",8],["What Manifestation Really Is (and What It Is Not)",19],["The BSIA System: Breath, Sound, Intention, Action",31]]],
["Part 2: Swar Vigyan and the Power of Breath",[["Ida, Pingala, Sushumna: The Basics",40],["Reading Your Nostril: Which Side Is Active?",48],["Best Times for Study, Work, Money Talks and Rest",55],["Simple Breathing Practices Anyone Can Do",63]]],
["Part 3: Sound and Frequency",[["How Sound Changes the Way You Feel",74],["OM, Humming and Chanting",82],["Hz, Binaural Beats and Healing Frequencies",90],["Your Personal 10-Minute Sound Routine",100]]],
["Part 4: Intention, Manifestation and the Law of Attraction",[["Writing Goals Your Mind Believes",107],["Visualization and Affirmations That Don't Feel Fake",117],["Removing the Blocks: Fear, Doubt and Comparison",127]]],
["Part 5: The Law of Luck",[["Luck Is Preparation Plus Opportunity Plus Courage",136],["How to Create a Lucky Surface Area",146],["Habits of Lucky People",155]]],
["Part 6: Putting It All Together",[["The 10-Minute Morning Ritual",163],["Stories of Change (Example Stories)",172],["Staying Consistent When Life Gets in the Way",180]]],
["Part 7: The 90-Day Plan",[["Days 1 to 30: CALM",188],["Days 31 to 60: CLARITY",198],["Days 61 to 90: Action and Luck",206]]],
["Closing Words and Appendices",[["A Letter to You",214],["Appendix A: Quick Reference",216],["Appendix B: Glossary",220],["Appendix C: Sources and Further Learning",223],["Appendix D: Your 90-Day Tracker",226]]]];

var tocEl = document.getElementById("toc");
if (tocEl) {
  tocEl.innerHTML = P.map(function(p,i){
    return "<details"+(i?"":" open")+"><summary>"+p[0]+"</summary><ul class='ch'>"+
      p[1].map(function(c){return "<li><span>"+c[0]+"</span><b>p. "+c[1]+"</b></li>"}).join("")+
      "</ul></details>";
  }).join("");
}

// ============ ANIMATIONS ============
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll("section").forEach(function(s){s.classList.add("reveal")});
  document.querySelectorAll(".checks li").forEach(function(c){c.classList.add("reveal")});

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){entry.target.classList.add("active")}
    });
  },{threshold:0.15});

  document.querySelectorAll(".reveal").forEach(function(el){observer.observe(el)});
  document.querySelectorAll(".checks li").forEach(function(item,i){item.style.transitionDelay=(i*0.1)+"s"});

  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener("click",function(e){
      var target=document.querySelector(this.getAttribute("href"));
      if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"})}
    });
  });

  var nav=document.querySelector("nav");
  window.addEventListener("scroll",function(){
    nav.style.boxShadow=window.scrollY>50?"0 4px 20px rgba(0,0,0,.3)":"none";
  });
});