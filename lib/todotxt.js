'use babel';

var menu, contextMenu;

function compareProject(a, b) {
    var splitA = a.split(" +");
    var splitB = b.split(" +");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    
    return 0;
}

module.exports = {
	config: {
        deleteEnabled: {
            type: 'boolean',
            default: false
        }
    },
  activate() {
    this.subscription = inkdrop.commands.add(document.body, {
      'todotxt:setPriorityA': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (A)" + selected.slice(5));
      },
	  'todotxt:setPriorityB': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (B)" + selected.slice(5));
      },
	  'todotxt:setPriorityC': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (C)" + selected.slice(5));
      },
	  'todotxt:setPriorityD': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (D)" + selected.slice(5));
      },
	  'todotxt:setPriorityE': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (E)" + selected.slice(5));
      },
	  'todotxt:setPriorityF': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (F)" + selected.slice(5));
      },
	  'todotxt:setPriorityG': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (G)" + selected.slice(5));
      },
	  'todotxt:setPriorityH': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (H)" + selected.slice(5));
      },
	  'todotxt:setPriorityI': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (I)" + selected.slice(5));
      },
	  'todotxt:setPriorityJ': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (J)" + selected.slice(5));
      },
	  'todotxt:setPriorityK': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (K)" + selected.slice(5));
      },
	  'todotxt:setPriorityL': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (L)" + selected.slice(5));
      },
	  'todotxt:setPriorityM': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (M)" + selected.slice(5));
      },
	  'todotxt:setPriorityN': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (N)" + selected.slice(5));
      },
	  'todotxt:setPriorityO': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (O)" + selected.slice(5));
      },
	  'todotxt:setPriorityP': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (P)" + selected.slice(5));
      },
	  'todotxt:setPriorityQ': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (Q)" + selected.slice(5));
      },
	  'todotxt:setPriorityR': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (R)" + selected.slice(5));
      },
	  'todotxt:setPriorityS': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (S)" + selected.slice(5));
      },
	  'todotxt:setPriorityT': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (T)" + selected.slice(5));
      },
	  'todotxt:setPriorityU': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (U)" + selected.slice(5));
      },
	  'todotxt:setPriorityV': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (V)" + selected.slice(5));
      },
	  'todotxt:setPriorityW': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (W)" + selected.slice(5));
      },
	  'todotxt:setPriorityX': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (X)" + selected.slice(5));
      },
	  'todotxt:setPriorityY': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (Y)" + selected.slice(5));
      },
	  'todotxt:setPriorityZ': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
        cm.replaceSelection(selected.slice(0,5) + " (Z)" + selected.slice(5));
      },
	  'todotxt:removePriority': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}else{
			cm.replaceSelection(selected);
		}
	  },
	  'todotxt:sortPriority': () => {
		const { cm } = inkdrop.getActiveEditor();
		var lines = cm.lineCount() + 1;
		var i;
		var completed = [];
		var waiting = [];
		
		for (i = 0; i < lines; i++){
			cm.extendSelection({ line: i, ch:0 }, { line: i});
			var selected = cm.getSelection();
			if( selected.match(/^\*\s\[x\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
				completed.push(cm.getLine(i));
			}else if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
				waiting.push(cm.getLine(i));
			}
			cm.replaceSelection(selected);
		}
		
		waiting.sort();
		
		if(waiting.length){
			for (i = 0; i < waiting.length; i++){
				cm.extendSelection({ line: i, ch:0 }, { line: i});
				cm.replaceSelection(waiting[i]);
			}
			cm.replaceSelection(selected);
			for (i = waiting.length; i < completed.length+waiting.length; i++){
				cm.extendSelection({ line: i, ch:0 }, { line: i});
				cm.replaceSelection(completed[i-waiting.length]);
			}
		}
	  },
	  'todotxt:sortProject': () => {
		const { cm } = inkdrop.getActiveEditor();
		var lines = cm.lineCount() + 1;
		var i;
		var completed = [];
		var waiting = [];
		
		for (i = 0; i < lines; i++){
			cm.extendSelection({ line: i, ch:0 }, { line: i});
			var selected = cm.getSelection();
			if( selected.match(/^\*\s\[x\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
				completed.push(cm.getLine(i));
			}else if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
				waiting.push(cm.getLine(i));
			}
			cm.replaceSelection(selected);
		}
		if(waiting.find(element => element.includes(" +")) != undefined){
			var sorted = waiting.sort(compareProject);
			for(i = 0; i < sorted.length; i++){
				if(!sorted[i].includes(" +")){
					sorted.push(sorted.splice(i, 1)[0]);
				}
			}
			for (i = 0; i < sorted.length; i++){
				cm.extendSelection({ line: i, ch:0 }, { line: i});
				cm.replaceSelection(sorted[i]);
			}
		}
		cm.replaceSelection(selected);
		if(completed.find(element => element.includes(" +")) != undefined){
			for (i = waiting.length; i < completed.length+waiting.length; i++){
				cm.extendSelection({ line: i, ch:0 }, { line: i});
				cm.replaceSelection(completed[i-waiting.length]);
			}
		}
	  },
	  'todotxt:sortContext': () => {
		const { cm } = inkdrop.getActiveEditor();
		var lines = cm.lineCount() + 1;
		var i;
		var completed = [];
		var waiting = [];
		
		for (i = 0; i < lines; i++){
			cm.extendSelection({ line: i, ch:0 }, { line: i});
			var selected = cm.getSelection();
			if( selected.match(/^\*\s\[x\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
				completed.push(cm.getLine(i));
			}else if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
				waiting.push(cm.getLine(i));
			}
			cm.replaceSelection(selected);
		}
		if(waiting.find(element => element.includes(" @")) != undefined){
			var sorted = waiting.sort(x => waiting.map(y => y.split('@')[1]) ).reverse()
			for(i = 0; i < sorted.length; i++){
				if(!sorted[i].includes(" @")){
					sorted.push(sorted.splice(i, 1)[0]);
				}
			}
			for (i = 0; i < sorted.length; i++){
				cm.extendSelection({ line: i, ch:0 }, { line: i});
				cm.replaceSelection(sorted[i]);
			}
		}
		cm.replaceSelection(selected);
		if(completed.find(element => element.includes(" @")) != undefined){
			for (i = waiting.length; i < completed.length+waiting.length; i++){
				cm.extendSelection({ line: i, ch:0 }, { line: i});
				cm.replaceSelection(completed[i-waiting.length]);
			}
		}
	  },
	  'todotxt:organizeCompleted': () => {
		const { cm } = inkdrop.getActiveEditor();
		var lines = cm.lineCount() + 1;
		var i;
		var completed = [];
		var waiting = [];
		
		if(inkdrop.config.get('todotxt.deleteEnabled')){
			for (i = 0; i < lines; i++){
				cm.extendSelection({ line: i, ch:0 }, { line: i});
				var selected = cm.getSelection();
				if( selected.match(/^\*\s\[x\]/) != null ) {
					completed.push(cm.getLine(i));
				}else if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
					waiting.push(cm.getLine(i));
				}
				cm.replaceSelection(selected);
			}
			if(waiting.length){
				for (i = 0; i < waiting.length; i++){
					cm.extendSelection({ line: i, ch:0 }, { line: i});
					cm.replaceSelection(waiting[i]);
				}
				cm.replaceSelection(selected);
			}
			cm.replaceSelection(selected);
			for (i = waiting.length; i < completed.length+waiting.length; i++){
				cm.replaceRange("",{ line: i, ch:0 }, { line: i});
			}
		}else{
			for (i = 0; i < lines; i++){
				cm.extendSelection({ line: i, ch:0 }, { line: i});
				var selected = cm.getSelection();
				if( selected.match(/^\*\s\[x\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
					completed.push(cm.getLine(i));
				}else if( selected.match(/^\*\s\[\s\]\s\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
					waiting.push(cm.getLine(i));
				}
				cm.replaceSelection(selected);
			}
			if(waiting.length){
				for (i = 0; i < waiting.length; i++){
					cm.extendSelection({ line: i, ch:0 }, { line: i});
					cm.replaceSelection(waiting[i]);
				}
				cm.replaceSelection(selected);
				for (i = waiting.length; i < completed.length+waiting.length; i++){
					cm.extendSelection({ line: i, ch:0 }, { line: i});
					cm.replaceSelection(completed[i-waiting.length]);
				}
			}
		}
	  },
	  'todotxt:enableDelete': () => {
        menu.dispose();
		menu = inkdrop.menu.add([
			{
			label: 'Plugins',
			submenu : [{label: 'todo.txt', submenu : [{label: 'Disable deleting completed' , command: 'todotxt:disableDelete'}]}]
			}
		]);
		contextMenu.dispose();
		contextMenu = inkdrop.contextMenu.add({
			'.CodeMirror': [{
				label: 'todo.txt',
				submenu: [
					{ label: 'Remove completed tasks', command: 'todotxt:organizeCompleted' }
				]
			}]
		})
		inkdrop.config.set('todotxt.deleteEnabled', 'true');
	  },
	  'todotxt:disableDelete': () => {
        menu.dispose();
		menu = inkdrop.menu.add([
			{
			label: 'Plugins',
			submenu : [{label: 'todo.txt', submenu : [{label: 'Enable deleting completed' , command: 'todotxt:enableDelete'}]}]
			}
		]);
		contextMenu.dispose();
		contextMenu = inkdrop.contextMenu.add({
			'.CodeMirror': [{
				label: 'todo.txt',
				submenu: [
					{ label: 'Sort completed tasks', command: 'todotxt:organizeCompleted' }
				]
			}]
		})
		inkdrop.config.set('todotxt.deleteEnabled', 'false');
	  },
	})
	
	if(inkdrop.config.get('todotxt.deleteEnabled')){
		menu = inkdrop.menu.add([
			{
			label: 'Plugins',
			submenu : [{label: 'todo.txt', submenu : [{label: 'Disable deleting completed' , command: 'todotxt:disableDelete'}]}]
			}
		]);
		contextMenu = inkdrop.contextMenu.add({
			'.CodeMirror': [{
				label: 'todo.txt',
				submenu: [
					{ label: 'Remove completed tasks', command: 'todotxt:organizeCompleted' }
				]
			}]
		})
	}else{
		menu = inkdrop.menu.add([
			{
			label: 'Plugins',
			submenu : [{label: 'todo.txt', submenu : [{label: 'Enable deleting completed' , command: 'todotxt:enableDelete'}]}]
			}
		]);
		contextMenu = inkdrop.contextMenu.add({
			'.CodeMirror': [{
				label: 'todo.txt',
				submenu: [
					{ label: 'Sort completed tasks', command: 'todotxt:organizeCompleted' }
				]
			}]
		})
	}
	
  },

  deactivate() {
    this.subscription.dispose();
  }


};