#include<iostream>
using namespace std;
int linear(int arr[],int n,int key){
	for(int i=0;i<n;i++){
		if(arr[i]==key){
			cout<<"key found at"<<i+1<<endl;
			return i;
		}
	}
	cout<<"key not found";
	return -1;
	
}
int main(){
	int n;
	cout<<"enter size: "<<endl;
	cin>>n;
	int arr[n];
	cout<<"the elements: "<<endl;
	for(int i=0;i<n;i++){
		cin>>arr[i];
	}
	cout<<"the array"<<endl;
	for(int i=0;i<n;i++){
		cout<<arr[i]<<" ";
		
		
	}
	int key;
     cout<<"\nenter key: "<<endl;
     cin>>key;
    linear(arr,n,key);
	
	return 0;
}
