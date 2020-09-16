'use babel';

module.exports = {

  activate() {
    this.subscription = inkdrop.commands.add(document.body, {
      'todotxt:setPriorityA': () => {
        const { cm } = inkdrop.getActiveEditor();
		var pos = cm.getCursor();
		cm.extendSelection({ line: pos.line, ch:0 }, { line: pos.line});
		var selected = cm.getSelection();
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
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
		if( selected.match(^\* \[ \] /\((A|C|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\)/) != null ) {
			cm.replaceSelection(selected.slice(0,5) + selected.slice(9));
		}else{
			cm.replaceSelection(selected);
		}
      }
	})
  },

  deactivate() {
    this.subscription.dispose();
  }


};