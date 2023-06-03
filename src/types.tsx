export type UserData = {
	name: string;
	email: string;
	phone: string;
};

export type AddonsType = {
	onlineServices: {
		selected: boolean;
		cost: {
			monthly: number;
			yearly: number;
		};
	};
	largerStorage: {
		selected: boolean;
		cost: {
			monthly: number;
			yearly: number;
		};
	};
	customizableProfile: {
		selected: boolean;
		cost: {
			monthly: number;
			yearly: number;
		};
	};
};
