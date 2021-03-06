export interface Department {
	Id: string;
	Name: string;

	Unit: string;
	Enable: string;

	Priority: string;
	StartWorkingTime: string;

	EndWorkingTime: string;
	NoneWorkingDayTableId: string;

	Queue: string;
	QueryMethod: {
		EnglishName: string;
		FarsiName: string;
	};

	UrlId: string;
	CallMore: string;

	RetryTime: string;
	CallDurationLimit: string;
}
