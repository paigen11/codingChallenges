/* Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing 
together the nodes of the first two lists. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  // check if either l1 or l2 are empty lists and return the list that exists
  if(!l1){
      return l2;
  } else if (!l2) {
      return l1;
  }
 
  // create a new empty linked list for combined lists
   let mergedLists = null;

   // create a current node variable to tack on other node values to the mergedLists (set it equal to mergedLists for now since no extra nodes exist yet)
   let currentNode = mergedLists;
   // if l1 and l2 both have nodes, loop through both to determine next smallest node
   while(l1 && l2){
     if(l1.val < l2.val){
      currentNode.next = l1;
        l1 = l1.next;
     } else {
      currentNode.next = l2;
       l2 = l2.next;
     }
     // advance currentNode down its length leaving in place already merged list nodes
     currentNode = currentNode.next;
   }

   // if just one list still exists, tack it on to the end of the list as it's already sorted
   if(l1){
     currentNode.next = l1;
   } else {
    currentNode.next = l2;
   }

   return mergedLists;
 }