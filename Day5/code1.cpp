
#include<iostream>
using namespace std;
int main(){
	int x,y;
	cin>>x>>y;
	x++;
	y++;
	int perimeter;
	perimeter=2*(x+y);
	
	cout<<perimeter<<endl;

	return 0;
}
/*
#include<iostream>
using namespace std;
int main(){
	int item,quantity,discount,add;
	cin>>item>>quantity>>discount>>add;
	int total =(item*quantity)-(item*quantity*discount/100);
	cout<<"total cost: "<<total<<endl;
	int final=(total)-(total*add/100);
	cout<<"final coat: "<<final <<endl;
	return 0;
*/  
#include<iostream>
#include<iomanip>
using namespace std;
int main(){
	int n,m;
	cin>>n>>m;
	 const double adult=210.0;
	 const double kid=150.0;
	 const double adultp=10.0;
	 const double kidp=20.0;
	double before=(n*adult)+(m*kid);
	double discountad=(n*adult*adultp)/100.0;
	double discountkid=(m* kid*kidp)/100.0;
	double after=(n*adult-discountad)+(m* kid-discountkid);
	cout<<fixed<<setprecision(2)<<before<<endl;
	cout<<fixed<<setprecision(2)<<after<<endl;
	return 0;
}
