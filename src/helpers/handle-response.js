import { authenticationService } from '../services';

// Handle Sign-in response
export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // Auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authenticationService.logout();
                //window.location.reload();
            }
            
            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}