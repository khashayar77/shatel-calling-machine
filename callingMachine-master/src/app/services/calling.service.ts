import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { CallRequest } from '../interfaces/call-request.interface';
import { CallingRequestQueryRequest } from '../interfaces/calling-request-query-request.interface';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CallingService {
	constructor(private http: HttpClient) {}

	get(id: string): Observable<CallRequest> {
		return this.http
			.get<{ Result: CallRequest }>(`${environment.server_ip}/departmentrequests/${id}`)
			.pipe(map((i) => i.Result));
	}

	query(
		data: CallingRequestQueryRequest
	): Observable<{ Result: CallRequest[]; total_items: number; page_no: number }> {
		return this.http.get<{ Result: CallRequest[]; total_items: number; page_no: number }>(
			`${environment.server_ip}/callrequests`
		);
	}

	list(pageNo: number = 0, pageSize: number = 1) {
		const params = new HttpParams().set('pageNo', pageNo.toString()).set('pageSize', pageSize.toString());
		return this.http.get<{
			Result: CallRequest[];
			total: number;
			page_no: number;
		}>(`${environment.server_ip}/callreaquests`, {
			params
		});
	}

	remove(callRequestID): Observable<void> {
		return this.http.delete<void>(`${environment.server_ip}/callrequests/${callRequestID}`);
	}
}
